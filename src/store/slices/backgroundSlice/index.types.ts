import type { AnimationState } from "@/lib";

type BackgroundNext = {
  backgroundNext:
    | "home"
    | "skills-certifications"
    | "employment-history"
    | "site-information"
    | "links-documents"
    | null;
};

export type InitialState = {
  background: string;
} & AnimationState &
  BackgroundNext;
