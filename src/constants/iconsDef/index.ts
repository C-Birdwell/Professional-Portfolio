import {
  faMoon,
  faSatellite,
  faStar,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export const iconDataSet = {
  moon: faMoon,
  star: faStar,
  satellite: faSatellite,
  sun: faSun,
};

type IconKey = keyof typeof iconDataSet;

export const iconDataNames: Record<IconKey, IconKey> = (
  Object.keys(iconDataSet) as IconKey[]
).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {} as Record<IconKey, IconKey>);
