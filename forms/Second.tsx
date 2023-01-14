import Form from "components/Form/Form";
import Input from "components/Input/Input";
import useSocketForm from "hooks/useSocketForm";
import { SecondBlock } from "schemas/blocks";

const Second = (): JSX.Element => {
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
    block: `block${2}`,
  });

  return (
    <Form title={SecondBlock.title}>
      <Input
        label={SecondBlock.inputs.birthday.label}
        placeholder={SecondBlock.inputs.birthday.placeholder}
        name={SecondBlock.inputs.birthday.name}
        value={isHasOwnProperty("birthday") ? fieldValues.birthday : ""}
        onFocus={() => onFocusInput("birthday", 2)}
        onBlur={() => onBlurInput("birthday", 2)}
        onChange={(e) => onChangeInput("birthday", 2, e)}
        readOnly={disabledField === "birthday" || disabledFieldInit.birthday}
        disabled={disabledField === "birthday" || disabledFieldInit.birthday}
      />
      <Input
        label={SecondBlock.inputs.height.label}
        placeholder={SecondBlock.inputs.height.placeholder}
        name={SecondBlock.inputs.height.name}
        value={isHasOwnProperty("height") ? fieldValues.height : ""}
        onFocus={() => onFocusInput("height", 2)}
        onBlur={() => onBlurInput("height", 2)}
        onChange={(e) => onChangeInput("height", 2, e)}
        readOnly={disabledField === "height" || disabledFieldInit.height}
        disabled={disabledField === "height" || disabledFieldInit.height}
      />
    </Form>
  );
};

export default Second;
