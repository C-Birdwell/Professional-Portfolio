import type { Employment, FlipIn } from "@/lib";

export type EmploymentProps = {
  employment: Employment;

  lastItem: boolean;
} & FlipIn;
