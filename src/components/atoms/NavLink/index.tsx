import { useNavigate, Link } from "react-router";

import { Button } from "@/components";
import { useActionCreators } from "@/hooks";
import { _backgroundSetNextBackground, _interfaceSetActiveLink } from "@/store";
import { formatLink } from "@/utils";
import type { NavLinkProps } from "./index.types";

const actionCreators = {
  _backgroundSetNextBackground,
  _interfaceSetActiveLink,
};

export const NavLink: React.FC<NavLinkProps> = ({
  target,
  targetText,
  type = "text",
  backgroundTheme = "primary",
  onDismiss,
  active,
}) => {
  const { _backgroundSetNextBackground, _interfaceSetActiveLink } =
    useActionCreators(actionCreators);
  const navigate = useNavigate();

  const linkHandler = () => {
    window.scrollTo(0, 0);

    _backgroundSetNextBackground(formatLink(target));
    _interfaceSetActiveLink(formatLink(target));
    onDismiss?.();
  };

  const buttonHandler = () => {
    navigate(target);
    linkHandler();
  };

  const navLink = (
    <Link to={target} onClick={linkHandler} className={active ? "active" : ""}>
      {targetText}
    </Link>
  );
  const navButton = (
    <Button
      buttonText={targetText}
      onClick={buttonHandler}
      backgroundTheme={backgroundTheme}
    />
  );
  return type === "text" ? navLink : navButton;
};
