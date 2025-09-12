import type { themeSizeTypes, themeScreenSizesTypes } from "@/constants";
import type {
  ClassNamesList,
  PropChildren,
  ParentClassName,
  ClassName,
} from "@/lib";

export type RowProps = {
  gutter?: (typeof themeSizeTypes)[number];
  breakPoint?: (typeof themeScreenSizesTypes)[number];
} & ParentClassName &
  ClassName &
  ClassNamesList &
  PropChildren &
  React.ComponentPropsWithoutRef<"div">;
