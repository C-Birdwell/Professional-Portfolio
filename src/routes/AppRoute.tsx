import { BrowserRouter } from "react-router-dom";

import { Header, Footer, FancyBackground } from "@/components";
import { ENV_BASENAME } from "@/constants";
import { useWindowDimensions } from "@/hooks";
import { PagesRoutes } from "@/routes";
import { Modal } from "@/pages";

export const AppRoute = () => {
  useWindowDimensions();

  return (
    <BrowserRouter basename={ENV_BASENAME}>
      <FancyBackground />
      <Modal />
      <Header />
      <PagesRoutes />
      <Footer />
    </BrowserRouter>
  );
};
