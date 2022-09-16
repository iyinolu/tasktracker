import React from "react";
import "../styles/textfield.scss";

interface Props {
  label: string;
  fieldInfo?: string;
  hasError?: boolean;
  hasLabel?: boolean;
  hasInfo?: boolean;
  setChange?: any;
  type: string;
  placeholder: string;
  className?: string;
  disabled: boolean;
  value?: any;
  onBlur?: any;
  onFocus?: any;
  name?: string;
}

const CustomTextField = ({
  label,
  fieldInfo,
  hasError,
  hasLabel,
  hasInfo,
  setChange,
  type,
  placeholder,
  className,
  disabled,
  value,
  onBlur,
  onFocus,
  name,
}: Props) => {
  return (
    <fieldset className={`form-fieldset ${className ?? ""}`}>
      {hasLabel && <label>{label}</label>}
      <input
        value={value}
        placeholder={placeholder ?? ""}
        onChange={(e) => setChange && setChange(name, e.target.value)}
        type={`${type ?? "text"}`}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
      />
      {hasInfo && (
        <span
          className={`${hasError ? "field-error-msg" : ""}`}
          id="field-info"
        >
          {fieldInfo && fieldInfo}
        </span>
      )}
    </fieldset>
  );
};

export default CustomTextField;
