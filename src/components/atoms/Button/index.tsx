import type { ButtonProps } from "./index.types";
import { disabledClassName, setClassNames } from "@/utils";

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  disabled = false,
  onClick = () => alert("Add a Function to this button"),
  children,
  parentName = "",
  backgroundTheme,
  marginBottom = 0,
  classNames = [],
}) => {
  const buttonClassNames = setClassNames("button", parentName, [
    disabledClassName(disabled),
    backgroundTheme,
    ...classNames,
  ]);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClassNames}
      style={{ marginBottom: marginBottom }}
    >
      {children}
      <div className="button_text">{buttonText}</div>
    </button>
  );
};
