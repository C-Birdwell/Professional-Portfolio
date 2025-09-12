import { ReactSVG } from "react-svg";

import type {
  StarBackgroundProps,
  StarClassNamesProps,
  StarColumnProps,
} from "./index.types";
import { convertVariantClassNames } from "@/utils";
import { star } from "@/assets";
import { Column, Row } from "@/components/atoms";

const StarInset: React.FC<StarClassNamesProps> = ({ classNames }) => {
  const cls = "star-background_inset";
  return (
    <div className={convertVariantClassNames(cls, classNames)}>
      <ReactSVG
        src={star}
        className={`star ${cls}_outer`}
        title={`Star for FancyBackground.`}
      />
      <ReactSVG
        src={star}
        className={`star ${cls}_inner`}
        title={`Star for FancyBackground.`}
      />
    </div>
  );
};

const StarFull: React.FC<StarClassNamesProps> = ({ classNames }) => {
  const cls = "star-background_full";
  return (
    <div className={convertVariantClassNames(cls, classNames)}>
      <ReactSVG
        src={star}
        className={`star`}
        title={`Star for FancyBackground.`}
      />
    </div>
  );
};

const StarColumn: React.FC<StarColumnProps> = ({
  alt = false,
  placement,
  parentName,
}) => {
  const columnArray = [];

  for (let i = 0; i < 6; i++) {
    const dirClass = (n: number) => {
      switch (n) {
        case 0:
        case 5:
          return "top";
        case 1:
          return "left";
        case 2:
        case 4:
          return "right";
        case 3:
          return "bottom";
        default:
          return "";
      }
    };

    const renderStar =
      i % 2 === 0 ? (
        <StarInset
          classNames={[i.toString(), dirClass(i)]}
          key={`star-column-${placement}-${i}`}
        />
      ) : (
        <StarFull
          classNames={[i.toString(), dirClass(i)]}
          key={`star-column-${placement}-${i}`}
        />
      );

    columnArray.push(renderStar);
  }

  const altName = alt ? "alt" : "";

  return (
    <Column parentName={parentName} classNames={[altName]}>
      {alt ? columnArray.reverse() : columnArray}
    </Column>
  );
};

export const StarBackground: React.FC<StarBackgroundProps> = ({
  animation,
}) => {
  const cls = "star-background";
  const nameClass = convertVariantClassNames(cls, [animation]);
  const columnArray = [];
  for (let i = 0; i < 8; i++) {
    columnArray.push(
      <StarColumn
        placement={i}
        parentName={cls}
        alt={i % 2 === 0}
        key={`star-row-${i}`}
      />
    );
  }

  return (
    <div className={nameClass}>
      <Row>{columnArray}</Row>
    </div>
  );
};
