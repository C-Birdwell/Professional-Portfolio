import type { AnimationState, ParentClassName } from "@/lib";

export type StarBackgroundProps = AnimationState;
export type StarClassNamesProps = { classNames: string[] };
export type StarColumnProps = {
  alt?: boolean;
  placement: number;
} & ParentClassName;
