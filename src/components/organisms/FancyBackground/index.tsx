import {
  GridBackground,
  CloudBackground,
  BoxesBackground,
  RingBackground,
  StarBackground,
} from "@/components";
import { useFancyBackground, useStoreSelector } from "@/hooks";
import { type RootState } from "@/store";
import {
  FANCY_BACKGROUND_HOME,
  FANCY_BACKGROUND_LINKS,
  FANCY_BACKGROUND_SKILLS,
  FANCY_BACKGROUND_HISTORY,
} from "./utils";

export const FancyBackground = () => {
  const { animation, background } = useStoreSelector(
    (state: RootState) => state.background
  );
  useFancyBackground();

  const renderBackground = () => {
    switch (background) {
      case FANCY_BACKGROUND_HOME:
        return <BoxesBackground animation={animation} />;
      case FANCY_BACKGROUND_SKILLS:
        return <StarBackground animation={animation} />;
      case FANCY_BACKGROUND_HISTORY:
        return <CloudBackground animation={animation} />;
      case FANCY_BACKGROUND_LINKS:
        return <RingBackground animation={animation} />;

      default:
        return <GridBackground animation={animation} />;
    }
  };

  return <div className="fancy-background">{renderBackground()}</div>;
};
