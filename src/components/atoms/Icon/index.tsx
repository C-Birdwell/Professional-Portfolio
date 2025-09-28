import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { IconProps } from "./index.types";
import { iconDataSet } from "@/constants";

export const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <div className="icon">
      <FontAwesomeIcon icon={iconDataSet[icon]} />
    </div>
  );
};
