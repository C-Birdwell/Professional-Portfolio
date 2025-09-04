import { GridBackground, CloudBackground, BoxesBackground } from "@/components";
import { useFancyBackground, useStoreSelector } from "@/hooks";
import { type RootState } from "@/store";
import {
  FANCY_BACKGROUND_HOME,
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
        return <GridBackground className={animation} />;
      case FANCY_BACKGROUND_SKILLS:
        return <CloudBackground className={animation} />;
      case FANCY_BACKGROUND_HISTORY:
        return <BoxesBackground className={animation} />;
      default:
        return <GridBackground className={animation} />;
    }
  };

  return <div className="fancy-background">{renderBackground()}</div>;
};
