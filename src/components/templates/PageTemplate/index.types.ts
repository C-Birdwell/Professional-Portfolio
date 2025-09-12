import type { PropChildren } from "@/lib";

export type PageDefaultProps = {
  title: string;
  subtitle?: string;
  showTitles?: boolean;
  textContent?: string[];
} & PropChildren;
