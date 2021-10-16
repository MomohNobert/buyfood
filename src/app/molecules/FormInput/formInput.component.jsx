import { Style } from "./formInput.styles";

const FormInput = ({
  label,
  value,
  name,
  inputHandler,
  width,
  placeholder,
}) => {
  return (
    <Style.Container width={width}>
      <label>{label}</label>
      <input
        value={value}
        name={name}
        onChange={inputHandler}
        placeholder={placeholder}
      />
    </Style.Container>
  );
};

export default FormInput;
