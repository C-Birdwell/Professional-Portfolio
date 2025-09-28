import type {
  PropChildren,
  BackgroundTheme,
  ParentClassName,
  MarginBottom,
  ClassNamesList,
} from "@/lib";

export type ButtonProps = {
  buttonText: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler | void;
} & MarginBottom &
  PropChildren &
  BackgroundTheme &
  ParentClassName &
  ClassNamesList;
