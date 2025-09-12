import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

import type { LogoProps } from "./index.types";
import { logo } from "@/assets";
import { ENV_TITLE, URL_HOME } from "@/constants";

export const Logo: React.FC<LogoProps> = ({ onDismiss }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(URL_HOME);
  };

  return (
    <div className="logo" onClick={onDismiss}>
      <ReactSVG
        onClick={navigateHandler}
        src={logo}
        className="logo_svg"
        title={`Logo for ${ENV_TITLE}.`}
        wrapper="svg"
      />
      <div className="backdrop" />
    </div>
  );
};
