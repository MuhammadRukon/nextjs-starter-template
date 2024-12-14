import React, { useState, useId } from "react";

const Input = ({
  type = "text",
  name = "",
  id = useId(),
  placeholder = name[0]?.toUpperCase() + name.slice(1),
  className = "",
  labelText = placeholder,
  showLabel = false,
  labelClassName = "",
  wrapperClassName = "",
}) => {
  const [value, setValue] = useState("");

  const handleNumberChange = (e) => {
    /^[0-9+]*$/.test(e.target.value) && setValue(e.target.value);
  };

  return (
    <div className={`${wrapperClassName}`}>
      {showLabel && (
        <label className={`${labelClassName}`} htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        type={type === "number" ? "text" : type}
        name={name}
        {...(type === "number"
          ? {
              value: value,
              onChange: handleNumberChange,
            }
          : null)}
        id={id}
        placeholder={placeholder}
        className={`w-full py-2 px-4 ${className}`}
      />
    </div>
  );
};

export default Input;
