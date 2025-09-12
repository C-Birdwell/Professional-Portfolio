import type { ThemeColorsTypes, themeSizeTypes } from "@/constants";

export type BackgroundTheme = {
  backgroundTheme: (typeof ThemeColorsTypes)[number];
};

export type MarginBottom = { marginBottom?: (typeof themeSizeTypes)[number] };
