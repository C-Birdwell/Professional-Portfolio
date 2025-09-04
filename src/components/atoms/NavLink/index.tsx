import { useNavigate, Link } from "react-router";

import { Button } from "@/components";
import { useActionCreators } from "@/hooks";
import { _backgroundSetNextBackground } from "@/store";
import type { NavLinkProps } from "./index.types";

const actionCreators = { _backgroundSetNextBackground };

export const NavLink: React.FC<NavLinkProps> = ({
  target,
  targetText,
  type = "text",
  backgroundTheme = "primary",
  onDismiss,
}) => {
  const { _backgroundSetNextBackground } = useActionCreators(actionCreators);
  const navigate = useNavigate();

  const linkHandler = () => {
    window.scrollTo(0, 0);
    _backgroundSetNextBackground(
      target === "/" ? "home" : target.split("").slice(1).join("")
    );
    onDismiss?.();
  };

  const buttonHandler = () => {
    navigate(target);
    linkHandler();
  };

  const navLink = (
    <Link to={target} onClick={linkHandler}>
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
