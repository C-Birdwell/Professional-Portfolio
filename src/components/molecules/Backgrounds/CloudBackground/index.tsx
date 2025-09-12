import type { CloudBackgroundProps } from "./index.types";
import { convertVariantClassNames } from "@/utils";

export const CloudBackground: React.FC<CloudBackgroundProps> = ({
  animation,
}) => {
  const nameClass = convertVariantClassNames("cloud-background", [animation]);

  const renderClouds = (num: number) => {
    const cloudArray = [];

    for (let i = 0; i < num; i++) {
      cloudArray.push(
        <div className={`cloud cloud--${i}`} key={`cloud-fancy-${i}`} />
      );
    }
    return cloudArray;
  };

  return <div className={nameClass}>{renderClouds(6)}</div>;
};
