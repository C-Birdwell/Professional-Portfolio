import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { _interfaceSetWindowDimensions } from "@/store";

export const useWindowDimensions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initial dispatch on mount
    const initialDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    dispatch(_interfaceSetWindowDimensions(initialDimensions));

    const windowResize = () => {
      const newDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      dispatch(_interfaceSetWindowDimensions(newDimensions));
    };

    window.addEventListener("resize", windowResize);

    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, [dispatch]); // Only run on mount/unmount

  return null;
};
