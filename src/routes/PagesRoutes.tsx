import { Route, Routes } from "react-router-dom";

import {
  HomePage,
  NotFoundPage,
  EmploymentPage,
  InformationPage,
  LinksPage,
  SkillsPage,
} from "@/pages";
import {
  URL_HOME,
  URL_EMPLOYMENT,
  URL_LINKS,
  URL_SKILLS,
  URL_INFORMATION,
  URL_NOT_FOUND,
  mainCLS,
} from "@/constants";

export const PagesRoutes: React.FC = () => {
  return (
    <main className={mainCLS}>
      <Routes>
        <Route path={URL_HOME} index element={<HomePage />} />
        <Route path={URL_EMPLOYMENT} index element={<EmploymentPage />} />
        <Route path={URL_LINKS} index element={<LinksPage />} />
        <Route path={URL_SKILLS} index element={<SkillsPage />} />
        <Route path={URL_INFORMATION} index element={<InformationPage />} />
        <Route path={URL_NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};
