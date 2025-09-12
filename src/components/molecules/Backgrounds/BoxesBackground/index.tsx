import { ReactSVG } from "react-svg";

import type { BoxesBackgroundProps } from "./index.types";
import { convertVariantClassNames } from "@/utils";
import { logo } from "@/assets";

export const BoxesBackground: React.FC<BoxesBackgroundProps> = ({
  animation,
}) => {
  const cls = "boxes-background";
  const nameClass = convertVariantClassNames(cls, [animation]);

  const renderBoxes = (num: number) => {
    const cloudArray = [];

    for (let i = 0; i < num; i++) {
      cloudArray.push(
        <div className={`boxes boxes--${i}`} key={`boxes-fancy-${i}`}>
          <div className="boxes_inner">
            <div className="boxes_inner_front" />
            <div className="boxes_inner_back" />
          </div>
        </div>
      );
    }
    return cloudArray;
  };

  const renderRows = (num: number) => {
    const rowArray = [];

    for (let i = 0; i < num; i++) {
      rowArray.push(
        <div
          className={`${convertVariantClassNames(`${cls}_row`, [
            i.toString(),
          ])}`}
          key={`boxes-row-${i}`}
        >
          {renderBoxes(10)}
        </div>
      );
    }
    return rowArray;
  };

  return (
    <div className={nameClass}>
      {renderRows(10)}
      <ReactSVG
        src={logo}
        className={`${cls}_svg`}
        title={`Logo for FancyBackground.`}
        wrapper="svg"
      />
    </div>
  );
};
