import { Column, PageTemplate, Row } from "@/components";
import { ENV_OWNER, ENV_TITLE, textHomeData } from "@/constants";

export const HomePage: React.FC = () => {
  const renderContactRow = () => {
    return (
      <Row>
        <Column>
          <a href="tel:1-713-542-4597">Phone: (713)-542-4597</a>
        </Column>
        <Column>
          <a href="mailto:Web.By.Birdwell@gmail.com" target="_top">
            Email: Web.By.Birdwell@gmail.com
          </a>
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
