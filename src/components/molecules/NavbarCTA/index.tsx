import type { NavbarCTAProps } from "./index.types";
import { Button } from "@/components/atoms";

export const NavbarCTA: React.FC<NavbarCTAProps> = ({ onPress }) => {
  return (
    <Button backgroundTheme="primary" buttonText="Contact" onClick={onPress} />
  );
};
