export const SIZE_XS = 5;
export const SIZE_S = 10;
export const SIZE_M = 15;
export const SIZE_L = 20;
export const SIZE_XL = 40;
export const SIZE_XXL = 80;

// "laptop" | "tablet" | "mobile" | "";

export const SCREEN_DESKTOP = "desktop";
export const SCREEN_LAPTOP = "laptop";
export const SCREEN_TABLET = "tablet";
export const SCREEN_MOBILE = "mobile";

export const themeScreenSizesTypes = [
  SCREEN_DESKTOP,
  SCREEN_LAPTOP,
  SCREEN_TABLET,
  SCREEN_MOBILE,
  "",
] as const;

export const themeSizeTypes = [
  SIZE_XS,
  SIZE_S,
  SIZE_M,
  SIZE_L,
  SIZE_XL,
  SIZE_XXL,
  0,
] as const;

export const BREAKPOINT_TABLET = 1050;
export const BREAKPOINT_PHONE = 770;
