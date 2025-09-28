import { iconDataNames } from "@/constants";
import type { NavbarCTAProps } from "./index.types";
import { ButtonIcon } from "@/components";

export const NavbarCTA: React.FC<NavbarCTAProps> = ({ onPress }) => {
  const { satellite } = iconDataNames;
  return (
    <ButtonIcon
      backgroundTheme="primary"
      buttonText="CONTACT"
      onClick={onPress}
      icon={satellite}
    />
  );
};
