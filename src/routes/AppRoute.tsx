import { BrowserRouter } from "react-router-dom";

import { Header, Footer, FancyBackground } from "@/components";
import { headerCLS, footerCLS, ENV_BASENAME } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import { PagesRoutes } from "@/routes";
import { Modal } from "@/pages";

export const AppRoute = () => {
  useWindowDimensions();

  return (
    <BrowserRouter basename={ENV_BASENAME}>
      <FancyBackground />
      <Modal />
      <Header className={headerCLS} />
      <PagesRoutes />
      <Footer className={footerCLS} />
    </BrowserRouter>
  );
};
