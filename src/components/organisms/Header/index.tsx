import { useState, type FC } from "react";
import {
  MobileNav,
  MobileNavButton,
  Navbar,
  Backdrop,
  Row,
  Column,
  Logo,
} from "@/components";
import { useStoreSelector, useActionCreators } from "@/hooks";

import { linksArray } from "./utils";
import { BREAKPOINT_TABLET, COLOR_DARK } from "@/constants";
import {
  type RootState,
  _modalSetBackgroundColor,
  _modalSetVisible,
  _modalSetModalRoute,
} from "@/store";

const actionCreators = {
  _modalSetBackgroundColor,
  _modalSetVisible,
  _modalSetModalRoute,
};

export const Header: FC = () => {
  const { _modalSetBackgroundColor, _modalSetVisible, _modalSetModalRoute } =
    useActionCreators(actionCreators);
  const { width, activeLink } = useStoreSelector(
    (state: RootState) => state.interface
  );
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive((state) => !state);
  };

  const onDismiss = () => {
    setIsActive(false);
  };

  const actionCTA = () => {
    _modalSetModalRoute("contact");
    _modalSetBackgroundColor(COLOR_DARK);
    _modalSetVisible(true);
  };

  const desktopLayout = width > BREAKPOINT_TABLET;

  return (
    <>
      <header className="header">
        <Row parentName="header">
          <Column classNames={["justify-center", "align-start"]}>
            <Logo onDismiss={onDismiss} />
          </Column>
          <Column size={4} classNames={["justify-center", "align-end"]}>
            {desktopLayout ? (
              <Navbar
                links={linksArray}
                parentName="header"
                onDismiss={() => {}}
                actionCTA={actionCTA}
                activeLink={activeLink}
              />
            ) : (
              <MobileNavButton onPress={clickHandler} isActive={isActive} />
            )}
          </Column>
        </Row>
      </header>
      {isActive && !desktopLayout && (
        <>
          <Backdrop backgroundTheme="" onDismiss={onDismiss} />
          <MobileNav
            links={linksArray}
            onDismiss={onDismiss}
            actionCTA={actionCTA}
          />
        </>
      )}
    </>
  );
};
