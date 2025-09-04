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
  animation: "intro" | "outro";
} & BackgroundNext;
