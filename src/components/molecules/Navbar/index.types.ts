import type { NavLinksDataProps } from "@/components/index.types";
import type { ParentClassName, OnDismiss } from "@/lib";

export type NavbarProps = {
  actionCTA: () => void;
  activeLink: string;
} & OnDismiss &
  NavLinksDataProps &
  ParentClassName;
