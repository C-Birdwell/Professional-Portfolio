import type { NavLinkProps } from "@/components/index.types";
import {
  ThemeColorsTypes,
  TITLE_HOME,
  TITLE_EMPLOYMENT,
  TITLE_INFORMATION,
  TITLE_LINKS,
  TITLE_SKILLS,
  URL_SKILLS,
  URL_EMPLOYMENT,
  URL_INFORMATION,
  URL_LINKS,
  URL_HOME,
} from "@/constants";

const createLinkItem = (
  target: string,
  targetText: string,
  type: "text" | "button" = "text",
  backgroundTheme: (typeof ThemeColorsTypes)[number] = "primary"
) => ({
  target,
  targetText,
  type,
  backgroundTheme,
  onDismiss: () => {},
});
const homeLink = createLinkItem(URL_HOME, TITLE_HOME);
const skillsLink = createLinkItem(URL_SKILLS, TITLE_SKILLS);
const employmentLink = createLinkItem(URL_EMPLOYMENT, TITLE_EMPLOYMENT);
const linksLink = createLinkItem(URL_LINKS, TITLE_LINKS);
const informationLink = createLinkItem(URL_INFORMATION, TITLE_INFORMATION);

export const linksArray: NavLinkProps[] = [
  homeLink,
  skillsLink,
  employmentLink,
  linksLink,
  informationLink,
];
