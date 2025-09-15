import type { PropChildren } from "@/lib";

export type PageDefaultProps = {
  title: string;
  customClass?: string;
  subtitle?: string;
  showTitles?: boolean;
  textContent?: string[];
} & PropChildren;
