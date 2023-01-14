import Form from "components/Form/Form";
import Input from "components/Input/Input";
import useSocketForm from "hooks/useSocketForm";
import { ThirdBlock } from "schemas/blocks";

const Third = (): JSX.Element => {
  const {
    isHasOwnProperty,
    fieldValues,
    onFocusInput,
    onBlurInput,
    onChangeInput,
    disabledField,
    disabledFieldInit,
  } = useSocketForm({
    command: "subscribe",
    block: `block${3}`,
  });

  return (
    <Form title={ThirdBlock.title}>
      <Input
        label={ThirdBlock.inputs.city.label}
        placeholder={ThirdBlock.inputs.city.placeholder}
        name={ThirdBlock.inputs.city.name}
        value={isHasOwnProperty("city") ? fieldValues.city : ""}
        onFocus={() => onFocusInput("city", 3)}
        onBlur={() => onBlurInput("city", 3)}
        onChange={(e) => onChangeInput("city", 3, e)}
        readOnly={disabledField === "city" || disabledFieldInit.city}
        disabled={disabledField === "city" || disabledFieldInit.city}
      />
      <Input
        label={ThirdBlock.inputs.street.label}
        placeholder={ThirdBlock.inputs.street.placeholder}
        name={ThirdBlock.inputs.street.name}
        value={isHasOwnProperty("address") ? fieldValues.address : ""}
        onFocus={() => onFocusInput("address", 3)}
        onBlur={() => onBlurInput("address", 3)}
        onChange={(e) => onChangeInput("address", 3, e)}
        readOnly={disabledField === "address" || disabledFieldInit.address}
        disabled={disabledField === "address" || disabledFieldInit.address}
      />
      <Input
        label={ThirdBlock.inputs.zipCode.label}
        placeholder={ThirdBlock.inputs.zipCode.placeholder}
        name={ThirdBlock.inputs.zipCode.name}
        value={isHasOwnProperty("index") ? fieldValues.index : ""}
        onFocus={() => onFocusInput("index", 3)}
        onBlur={() => onBlurInput("index", 3)}
        onChange={(e) => onChangeInput("index", 3, e)}
        readOnly={disabledField === "index" || disabledFieldInit.index}
        disabled={disabledField === "index" || disabledFieldInit.index}
      />
    </Form>
  );
};

export default Third;
