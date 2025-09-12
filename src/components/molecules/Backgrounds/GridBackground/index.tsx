import type { GridBackgroundProps } from "./index.types";
import { convertVariantClassNames } from "@/utils";

export const GridBackground: React.FC<GridBackgroundProps> = ({
  animation,
}) => {
  const cls = "grid-background";
  const nameClass = convertVariantClassNames(cls, [animation]);
  return <div className={nameClass} />;
};
