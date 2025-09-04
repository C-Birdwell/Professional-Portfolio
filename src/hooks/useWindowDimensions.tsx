import { _interfaceSetWindowDimensions } from "@/store";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export const useWindowDimensions = () => {
  const dispatch = useDispatch();

  // Initialize with current dimensions
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    dispatch(_interfaceSetWindowDimensions(windowDimensions));

    const windowResize = () => {
      const newDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setWindowDimensions(newDimensions);
      dispatch(_interfaceSetWindowDimensions(newDimensions));
    };

    window.addEventListener("resize", windowResize);

    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, [dispatch, windowDimensions]);

  return null;
};
