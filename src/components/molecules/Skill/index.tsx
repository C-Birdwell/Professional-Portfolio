import { Card, Column, Row } from "@/components/atoms";
import type { SkillProps } from "./index.types";
import { arrayJoin } from "@/utils";

export const Skill: React.FC<SkillProps> = ({ path, labels, flipIn }) => {
  const renderLabels = () => {
    return labels.map((label) => {
      return (
        <Column
          classNames={["align-center", "justify-center"]}
          key={`${arrayJoin(labels, "-")}-${label}`}
        >
          <p>{label}</p>
        </Column>
      );
    });
  };
  return (
    <Card classNames={["skill", arrayJoin(labels, "-")]} border flipIn={flipIn}>
      <Column classNames={["align-center"]}>
        <div className="skill_image">
          <img
            src={path}
            title={`Skill image for ${arrayJoin(labels, " ")}.`}
          />
        </div>
      </Column>
      <Column>
        <Row classNames={["skill_labels"]}>{renderLabels()}</Row>
      </Column>
    </Card>
  );
};
