import type { GridBackgroundProps } from "./index.types";
import { convertVariantClassNames } from "@/utils";

export const GridBackground: React.FC<GridBackgroundProps> = ({
  className,
}) => {
  const nameClass = convertVariantClassNames("grid-background", [className]);
  return <div className={nameClass} />;
};
