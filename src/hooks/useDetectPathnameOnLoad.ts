import { useEffect } from "react";

import { useActionCreators } from "@/hooks";
import { _backgroundSetNextBackground, _interfaceSetActiveLink } from "@/store";
import { formatLink } from "@/utils";

const actionCreators = {
  _backgroundSetNextBackground,
  _interfaceSetActiveLink,
};

export const useDetectPathnameOnLoad = () => {
  const { _backgroundSetNextBackground, _interfaceSetActiveLink } =
    useActionCreators(actionCreators);

  useEffect(() => {
    const currentRoutePath = window.location.pathname;
    const pathnameHandler = (pathname: string) => {
      _backgroundSetNextBackground(formatLink(pathname));
      _interfaceSetActiveLink(formatLink(pathname));
    };
    pathnameHandler(currentRoutePath);
  }, [_backgroundSetNextBackground, _interfaceSetActiveLink]);
};
