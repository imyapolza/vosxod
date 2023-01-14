interface ISocketData {
  command: "subscribe";
  block: "block1" | "block2" | "block3";
}

interface FieldValues {
  [key: string]: string;
}

interface Resp {
  data: Record<string, string>;
}

interface ReqData {
  command: "update";
  block: "block1" | "block2" | "block3";
  data: Record<string, string>;
}
