import Form from "components/Form/Form";
import Input from "components/Input/Input";
import useSocketForm from "hooks/useSocketForm";
import { FirstBlock } from "schemas/blocks";

const First = (): JSX.Element => {
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
    block: `block${1}`,
  });

  return (
    <Form title={FirstBlock.title}>
      <Input
        label={FirstBlock.inputs.firstName.label}
        placeholder={FirstBlock.inputs.firstName.placeholder}
        name={FirstBlock.inputs.firstName.name}
        value={isHasOwnProperty("fname") ? fieldValues.fname : ""}
        onFocus={() => onFocusInput("fname", 1)}
        onBlur={() => onBlurInput("fname", 1)}
        onChange={(e) => onChangeInput("fname", 1, e)}
        readOnly={disabledField === "fname" || disabledFieldInit.fname}
        disabled={disabledField === "fname" || disabledFieldInit.fname}
      />
      <Input
        label={FirstBlock.inputs.lastName.label}
        placeholder={FirstBlock.inputs.lastName.placeholder}
        name={FirstBlock.inputs.lastName.name}
        value={isHasOwnProperty("lname") ? fieldValues.lname : ""}
        onFocus={() => onFocusInput("lname", 1)}
        onBlur={() => onBlurInput("lname", 1)}
        onChange={(e) => onChangeInput("lname", 1, e)}
        readOnly={disabledField === "lname" || disabledFieldInit.lname}
        disabled={disabledField === "lname" || disabledFieldInit.lname}
      />
    </Form>
  );
};

export default First;
