import { animationStateTypes } from "@/constants";

export type AnimationState = {
  animation: (typeof animationStateTypes)[number];
};
