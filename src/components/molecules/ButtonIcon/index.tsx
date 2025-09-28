import { Button, Icon } from "@/components/atoms";
import type { ButtonIconProps } from "./index.types";

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  disabled,
  buttonText,
  onClick,
  backgroundTheme,
}) => {
  return (
    <Button
      disabled={disabled}
      buttonText={buttonText}
      onClick={onClick}
      backgroundTheme={backgroundTheme}
      classNames={["icon"]}
    >
      <Icon icon={icon}></Icon>
    </Button>
  );
};
