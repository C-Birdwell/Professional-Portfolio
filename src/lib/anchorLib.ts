import type { HTMLAttributeAnchorTarget } from "react";

export type AnchorProp = {
  text: string;
  href: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

export type LinksArray = AnchorProp[];
