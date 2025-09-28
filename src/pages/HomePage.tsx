import { Anchor, Column, PageTemplate, Row } from "@/components";
import { ENV_OWNER, ENV_TITLE, textHomeData } from "@/constants";

export const HomePage: React.FC = () => {
  const renderContactRow = () => {
    return (
      <Row parentName="page--home" breakPoint="tablet">
        <Column style={{ marginBottom: "20px" }}>
          <Anchor href="tel:1-713-542-4597" text="Phone: (713) 542 - 4597" />
        </Column>
        <Column>
          <Anchor
            href="mailto:Web.By.Birdwell@gmail.com"
            text="Email: Web.By.Birdwell@gmail.com"
          />
        </Column>
      </Row>
    );
  };

  return (
    <PageTemplate
      title={ENV_TITLE}
      subtitle={`The portfolio website of ${ENV_OWNER}.`}
      textContent={textHomeData}
      customClass="home"
    >
      {renderContactRow()}
    </PageTemplate>
  );
};
