import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

import type { LogoProps } from "./index.types";
import { logo } from "@/assets";
import { ENV_TITLE, URL_HOME } from "@/constants";

export const Logo: React.FC<LogoProps> = ({ onDismiss }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    onDismiss();

    navigate(URL_HOME);
  };

  return (
    <div className="logo" onClick={navigateHandler}>
      <div className="logo_image">
        <ReactSVG
          src={logo}
          className="logo_image_svg"
          title={`Logo for ${ENV_TITLE}.`}
          wrapper="svg"
        />
        <div className="logo_image_backdrop" />
      </div>

      <h1>
        <span className="top">
          <span className="top_left">Web</span>
          <span className="top_right"> By</span>
        </span>
        <span className="bottom">Birdwell</span>
      </h1>
    </div>
  );
};
