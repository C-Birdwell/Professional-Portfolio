import { Employment, PageTemplate } from "@/components";
import { employmentData, ENV_OWNER } from "@/constants";

export const EmploymentPage: React.FC = () => {
  const renderEmployments = () => {
    return employmentData.map((employment, i) => {
      const flipIn = i % 2 === 0 ? "left" : "right";
      return (
        <Employment
          employment={employment}
          key={`employment-${i}`}
          flipIn={flipIn}
          lastItem={i === employmentData.length - 1}
        />
      );
    });
  };

  return (
    <PageTemplate
      title="Employment History"
      subtitle={`The Web Development and Design Career of ${ENV_OWNER}.`}
    >
      {renderEmployments()}
    </PageTemplate>
  );
};
