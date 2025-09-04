import { useEffect } from "react";

import { useActionCreators, useStoreSelector } from "@/hooks";
import {
  _backgroundSetNextBackground,
  _backgroundSetAnimation,
  _backgroundSetBackground,
  type RootState,
} from "@/store";

const actionCreators = {
  _backgroundSetNextBackground,
  _backgroundSetAnimation,
  _backgroundSetBackground,
};

export const useFancyBackground = () => {
  const {
    _backgroundSetNextBackground,
    _backgroundSetAnimation,
    _backgroundSetBackground,
  } = useActionCreators(actionCreators);

  const { animation, background, backgroundNext } = useStoreSelector(
    (state: RootState) => state.background
  );

  useEffect(() => {
    const backgroundHandler = () => {
      _backgroundSetAnimation("intro");
      _backgroundSetBackground(backgroundNext);
      _backgroundSetNextBackground(null);
    };

    if (backgroundNext !== null) {
      if (background === backgroundNext) {
        _backgroundSetNextBackground(null);
      } else {
        _backgroundSetAnimation("outro");
        setTimeout(() => {
          backgroundHandler();
        }, 1000);
      }
    }
  }, [
    animation,
    background,
    backgroundNext,
    _backgroundSetNextBackground,
    _backgroundSetAnimation,
  ]);

  return null;
};
