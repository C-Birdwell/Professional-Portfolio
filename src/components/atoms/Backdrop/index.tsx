import { COLOR_DARK } from "@/constants";
import type { BackdropProps } from "./index.types";
import { convertVariantClassNames } from "@/utils";

export const Backdrop: React.FC<BackdropProps> = ({
  backgroundTheme = COLOR_DARK,
  onDismiss,
  children,
}) => {
  const applyClassNames = convertVariantClassNames("backdrop", [
    className,
    backgroundTheme,
  ]);
  return (
    <div className={applyClassNames} onClick={onDismiss}>
      {children}
    </div>
  );
};
