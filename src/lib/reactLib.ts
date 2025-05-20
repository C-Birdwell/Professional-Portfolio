import type { ReactNode, ChangeEvent } from "react";

export type PropChildren = { children?: ReactNode };
export type ClassName = { className?: string };
export type PropsSpreadOperator = { [key: string]: unknown };
export type InputOnChangeEvent = ChangeEvent<HTMLInputElement>;
