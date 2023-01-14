import MainContext from "context/MainContext";
import React from "react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useSocketForm = (data: ISocketData) => {
  const [connectionLost, setConnectionLost] = useState<boolean>(false);

  const { setConnectionLostPage } = useContext(MainContext);

  const [socket, setSocket] = useState(
    new WebSocket("wss://taxivoshod.ru:10011")
  );

  const [disabledFieldInit, setDisabledFieldInit] = useState<
    Record<string, boolean>
  >({});

  const [disabledField, setDisabledField] = useState<string | null>(null);
  const [fieldValues, setFieldValues] = useState<FieldValues>({});

  const id = data.block.slice(-1);

  const intervalReconnect = React.useRef<NodeJS.Timer>();

  useEffect(() => {
    const unsubscribeData = {
      command: "unsubscribe",
      block: `block${id}`,
    };

    return () => {
      socket.onopen = () => socket.send(JSON.stringify(unsubscribeData));
    };
  }, []);

  socket.onopen = function (e: Event) {
    toast.success("Соединение установлено" + " " + e);
    setConnectionLost(false);

    socket.send(JSON.stringify(data));
  };

  socket.onmessage = function (event: MessageEvent) {
    const resp = JSON.parse(event.data);

    if (resp.hasOwnProperty("success") && !resp.success) {
      toast.error(resp.message + "." + " " + "Действие:" + " " + resp.code);
    }

    if (resp.hasOwnProperty("status")) {
      setDisabledFieldInit((prev) => onChangeForm(prev, { data: resp.status }));
    }

    if (resp.hasOwnProperty("blur")) {
      setDisabledField(null);
    }

    if (resp.hasOwnProperty("focus")) {
      setDisabledField(resp.focus);
    }

    if (resp.hasOwnProperty("data")) {
      setFieldValues((prev) => onChangeForm(prev, resp));
    }
  };

  socket.onclose = function (event: CloseEvent) {
    if (event.wasClean) {
      toast.error(
        `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
      );
    } else {
      setConnectionLost(true);
      toast.error("Сервер недоступен");
    }
  };

  socket.onerror = function (error: Event) {
    setConnectionLost(true);
    toast.error(`Ошибка` + " " + error);
  };

  useEffect(() => {
    if (connectionLost) {
      setConnectionLostPage(true);

      intervalReconnect.current = setInterval(() => {
        toast.error("Попытка повторного подключения...");

        setSocket(new WebSocket("wss://taxivoshod.ru:10011"));
      }, 5000);
    }

    if (!connectionLost) {
      clearInterval(intervalReconnect.current);
    }
  }, [connectionLost]);

  const onChangeForm = (
    prev: FieldValues | Record<string, boolean>,
    resp: Resp
  ) => {
    const newData = JSON.parse(JSON.stringify(prev));

    for (let key in resp.data) {
      newData[key] = resp.data[key];
    }

    return newData;
  };

  const onFocusInput = (field: string, idForm: number) => {
    const data = { command: "focus", block: `block${idForm}`, field };

    socket.send(JSON.stringify(data));
  };

  const onBlurInput = (field: string, idForm: number) => {
    const data = { command: "blur", block: `block${idForm}`, field };

    socket.send(JSON.stringify(data));
  };

  const onChangeInput = (
    field: string,
    idForm: number,
    e: React.FormEvent<HTMLInputElement>
  ) => {
    const targetValue = (e.target as HTMLInputElement).value;

    const reqData: ReqData = {
      command: "update",
      block: `block${idForm}` as "block1" | "block2" | "block3",
      data: {},
    };

    reqData.data[field] = targetValue;

    socket.send(JSON.stringify(reqData));

    setFieldValues((prev) =>
      onChangeForm(prev, {
        data: { [field]: targetValue },
      })
    );
  };

  const isHasOwnProperty = (key: string) => {
    if (fieldValues) {
      return fieldValues.hasOwnProperty(key);
    }
  };

  return {
    isHasOwnProperty,
    fieldValues,
    onFocusInput,
    onBlurInput,
    onChangeInput,
    disabledField,
    disabledFieldInit,
  };
};

export default useSocketForm;
