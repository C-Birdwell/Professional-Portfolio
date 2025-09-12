import { PageTemplate, Skill } from "@/components";
import { ENV_OWNER } from "@/constants";

export const SkillsPage: React.FC = () => {
  return (
    <PageTemplate
      title="Skills and Certifications"
      subtitle={`The abilities & expertise of ${ENV_OWNER}.`}
    >
      <Skill />
    </PageTemplate>
  );
};
