import { PageTemplate } from "@/components";
import { textInformationData } from "@/constants";

export const InformationPage: React.FC = () => {
  return (
    <PageTemplate
      title="Site Information"
      subtitle="Information pertaining to the construction and hosting of my portfolio website."
      textContent={textInformationData}
    />
  );
};
