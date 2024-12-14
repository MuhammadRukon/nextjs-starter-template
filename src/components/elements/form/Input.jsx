import React, { useState } from "react";

const Input = ({
  type = "text",
  value,
  name,
  setValue,
  placeholder = name[0]?.toUpperCase() + name.slice(1),
  className = "",
  labelText = placeholder,
  showLabel = false,
  labelClassName = "",
  wrapperClassName = "",
}) => {
  // const [innerValue, setInnerValue] = useState("");

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
        value={value}
        {...(type === "number"
          ? {
              onChange: handleNumberChange,
            }
          : {
              onChange: (e) => setValue(e.target.value),
            })}
        // {...(type === "number"
        //   ? {
        //       value: innerValue,
        //       onChange: handleNumberChange,
        //     }
        //   : {
        //       value: value,
        //       onChange: (e) => setValue(e.target.value),
        //     })}
        placeholder={placeholder}
        className={`${className}  w-full py-2 px-4 focus:outline-none border`}
      />
    </div>
  );
};

export default Input;
