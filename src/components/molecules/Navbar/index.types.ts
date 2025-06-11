import type { NavLinksDataProps } from "@/components/index.types";
import type { ParentClassName, OnDismiss } from "@/lib";

export type NavbarProps = OnDismiss & NavLinksDataProps & ParentClassName;
