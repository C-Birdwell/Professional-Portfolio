import type { FlipIn } from "@/lib";

export type SkillProps = {
  path: string;
  labels: string[];
  fadeIn?: boolean;
} & FlipIn;
