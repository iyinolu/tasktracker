import React from "react";
import "../styles/button.scss"

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  onClick: any;
  children: any;
  disabled?: boolean;
}

const PrimaryButton = ({ type, onClick, children, disabled }: Props) => {
  return (
    <button className="primary-btn" type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default PrimaryButton;
