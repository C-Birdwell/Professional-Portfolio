import {
  Column,
  PageTemplate,
  Row,
  Skill,
  AWSCertification,
} from "@/components";
import { ENV_OWNER, skillsImageData } from "@/constants";
import type { SkillsImageData } from "@/lib";
import { chunkArray, arrayJoin } from "@/utils";

const chunkedSkills = chunkArray(skillsImageData, 4);

export const SkillsPage: React.FC = () => {
  const renderContent = (data: SkillsImageData) => {
    return data.map((skill, i) => {
      const { labels, path } = skill;
      const flipIn = i % 2 === 0 ? "left" : "right";
      return (
        <Column key={`skill-${arrayJoin(labels, "-")}-${i}`}>
          <Skill labels={labels} path={path} flipIn={flipIn} />
        </Column>
      );
    });
  };

  const renderRows = () => {
    return chunkedSkills.map((val, i) => {
      return (
        <Row key={`skill-row-${i}`} gutter={10}>
          {renderContent(val)}
        </Row>
      );
    });
  };

  return (
    <PageTemplate
      title="Skills and Certifications"
      subtitle={`The abilities & expertise of ${ENV_OWNER}.`}
    >
      <AWSCertification />
      {renderRows()}
    </PageTemplate>
  );
};
