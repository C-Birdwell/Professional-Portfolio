import type { BackgroundTheme } from "@/lib";
export type InitialState = {
  visible: boolean;
  modalRoute: "contact" | "";
} & BackgroundTheme;
