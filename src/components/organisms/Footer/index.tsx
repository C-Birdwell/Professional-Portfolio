//import type { FooterProps } from "./index.types";
import { ButtonIcon, Row, Column } from "@/components";
import { footerCLS, iconDataNames } from "@/constants";
import { setAppTheme } from "@/utils";

export const Footer: React.FC = () => {
  const { sun, moon } = iconDataNames;

  const buttonHandlerLight = () => {
    setAppTheme("light");
  };

  const buttonHandlerDark = () => {
    setAppTheme("dark");
  };

  return (
    <footer className={footerCLS}>
      <Row classNames={["theme"]} breakPoint="tablet">
        <Column classNames={["justify-center", "align-center"]}>
          <ButtonIcon
            buttonText="Light Theme"
            onClick={buttonHandlerLight}
            backgroundTheme="light"
            icon={sun}
          />
        </Column>
        <Column classNames={["justify-center", "align-center"]}>
          <ButtonIcon
            buttonText="Dark Theme"
            onClick={buttonHandlerDark}
            backgroundTheme="dark"
            icon={moon}
          />
        </Column>
      </Row>
    </footer>
  );
};
