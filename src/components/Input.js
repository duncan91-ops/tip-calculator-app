import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Input";

const Input = ({ icon, currentValue, onChange, reset }) => {
  const [value, setValue] = useState(currentValue);

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  useEffect(() => {
    if (reset) {
      setValue(null);
    }
  }, [reset]);

  return (
    <Wrapper>
      <input
        type="text"
        className={`form-input ${parseInt(value) === 0 && "error"}`}
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        placeholder="0"
      />
      {icon && <img src={icon} className="form-icon" alt="Input Icon" />}
    </Wrapper>
  );
};

export default Input;
