import type { RingBackgroundProps, RingProps } from "./index.types";
import { convertVariantClassNames } from "@/utils";

const cls = "ring-background";

const RenderCircle: React.FC<RingProps> = ({ i }) => {
  return (
    <div
      className={convertVariantClassNames(`${cls}_layer_circle`, [
        i.toString(),
        i % 2 === 0 ? "blank" : "",
      ])}
    />
  );
};

export const RingBackground: React.FC<RingBackgroundProps> = ({
  animation,
}) => {
  const nameClass = convertVariantClassNames(cls, [animation]);

  const renderLayers = (num: number) => {
    const layersArray = [];

    for (let i = 0; i < num; i++) {
      layersArray.push(
        <div
          className={convertVariantClassNames(`${cls}_layer`, [i.toString()])}
          key={`fancy-circle-${i}`}
        >
          <RenderCircle i={i} />
        </div>
      );
    }

    return layersArray;
  };

  return <div className={nameClass}>{renderLayers(20)}</div>;
};
