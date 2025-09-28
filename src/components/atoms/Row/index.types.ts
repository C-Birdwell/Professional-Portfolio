import type { themeSizeTypes, themeScreenSizesTypes } from "@/constants";
import type { ClassNamesList, PropChildren, ParentClassName } from "@/lib";

export type RowProps = {
  gutter?: (typeof themeSizeTypes)[number];
  breakPoint?: (typeof themeScreenSizesTypes)[number];
} & ParentClassName &
  ClassNamesList &
  PropChildren &
  React.ComponentPropsWithoutRef<"div">;
