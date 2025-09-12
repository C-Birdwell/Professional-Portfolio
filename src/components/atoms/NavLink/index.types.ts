import type { BackgroundTheme, OnDismiss } from "@/lib";

export type NavLinkProps = {
  target: string;
  targetText: string;
  type: "text" | "button";
  active: boolean;
} & BackgroundTheme &
  OnDismiss;

export type NavLinksDataProps = { links: NavLinkProps[] };
