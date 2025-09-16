import type { AnchorProps } from "./index.types";

export const Anchor: React.FC<AnchorProps> = ({
  text,
  href,
  target = undefined,
}) => {
  return (
    <a href={href} target={target} className="anchor">
      {text}
    </a>
  );
};
