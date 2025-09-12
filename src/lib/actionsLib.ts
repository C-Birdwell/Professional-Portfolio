import type { BackgroundTheme } from "@/lib";

export type ActionType = {
  text: string;
  action: () => void;
  id: string;
} & BackgroundTheme;

export type CustomActions = {
  customActions?: ActionType[] | undefined | null;
};

export type OnPress = {
  onPress?: () => void;
};
