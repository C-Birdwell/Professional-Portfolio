import { ModalContact } from "@/components";
import type { ModalRoute } from "@/lib";

export const modalRoutes = (selection: "contact" | ""): ModalRoute[] => {
  const createSlide = (
    title: string,
    slide: React.ReactElement,
    id: string
  ) => ({
    title,
    slide,
    id,
  });

  const slidesContact = [createSlide("CONTACT", <ModalContact />, "contact-1")];

  switch (selection) {
    case "contact":
      return slidesContact;

    default:
      return [
        {
          title: "ERROR",
          slide: <p>ERROR!!!</p>,
          id: "slide-error",
        },
      ];
  }
};
