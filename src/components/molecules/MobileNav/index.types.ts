import type { NavLinksDataProps } from "@/components/index.types";
import type { OnDismiss } from "@/lib";

export type MobileNavProps = { actionCTA?: () => void } & NavLinksDataProps &
  OnDismiss;
