import { Style } from "./formSelect.styles";

const FormSelect = ({
  label,
  value,
  name,
  inputHandler,
  width,
  options,
  default_option,
}) => {
  return (
    <Style.Container width={width}>
      <label>{label}</label>
      <div className="form-select">
        <select value={value} name={name} onChange={inputHandler}>
          <option className="default-option">{default_option}</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg
          className="custom-select-arrow"
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41421 0C0.523309 0 0.077142 1.07714 0.707107 1.70711L3.29289 4.29289C3.68342 4.68342 4.31658 4.68342 4.70711 4.29289L7.2929 1.70711C7.92286 1.07714 7.47669 0 6.58579 0H1.41421Z"
            fill="#A5B4CB"
          />
        </svg>
      </div>
    </Style.Container>
  );
};

export default FormSelect;
