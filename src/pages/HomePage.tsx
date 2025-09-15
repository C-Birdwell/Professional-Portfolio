import { PageTemplate } from "@/components";
import { ENV_OWNER, ENV_TITLE, textHomeData } from "@/constants";

export const HomePage: React.FC = () => {
  return (
    <PageTemplate
      title={ENV_TITLE}
      subtitle={`The portfolio website of ${ENV_OWNER}.`}
      textContent={textHomeData}
      customClass="home"
    />
  );
};
