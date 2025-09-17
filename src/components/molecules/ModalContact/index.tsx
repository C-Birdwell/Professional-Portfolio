import { Button, Column } from "@/components";

const linkedinLink = "https://www.linkedin.com/in/colin-birdwell/";
const telephoneLink = "tel:1-713-542-4597";
const mailLink = "mailto:Web.By.Birdwell@gmail.com";

export const ModalContact: React.FC = () => {
  const openLink = (url: string, target: "_blank" | "_self") => {
    window.open(url, target, "noopener,noreferrer");
  };

  return (
    <div className="modal_card_contact">
      <Column>
        <Button
          buttonText="Phone"
          onClick={() => openLink(telephoneLink, "_self")}
          backgroundTheme="primary"
          marginBottom={40}
        />
        <Button
          buttonText="Email"
          onClick={() => openLink(mailLink, "_self")}
          backgroundTheme="primary"
          marginBottom={40}
        />
        <Button
          buttonText="LinkedIn"
          onClick={() => openLink(linkedinLink, "_blank")}
          backgroundTheme="primary"
          marginBottom={40}
        />
      </Column>
    </div>
  );
};
