import type { Employment } from "@/lib";

export type EmploymentProps = {
  employment: Employment;
  flipIn: "left" | "right";
  lastItem: boolean;
};
