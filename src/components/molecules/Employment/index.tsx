import { Card, Column, Heading, Icon, Row } from "@/components";
import type { EmploymentProps } from "./index.types";
import { iconDataNames } from "@/constants";

export const Employment: React.FC<EmploymentProps> = ({
  employment,
  flipIn,
  lastItem,
}) => {
  const { company, role, industry, date, text, skills } = employment;

  const { star } = iconDataNames;

  const skillsList = () => {
    return skills.map((skill, i) => {
      return <li key={`${company}-${skill}-${i}`}>{skill}</li>;
    });
  };

  return (
    <Card
      border
      classNames={["employment"]}
      flipIn={flipIn}
      marginBottom={lastItem ? 0 : 20}
    >
      <Row breakPoint="tablet">
        <Column parentName="card--employment" classNames={["left"]}>
          <Heading size={4}>{company}</Heading>
          <Heading size={5}>{role}</Heading>
        </Column>
        <Column
          parentName="card--employment"
          classNames={["right", "align-end"]}
        >
          <p className="card--employment_date">{date}</p>
          <p className="card--employment_industry">[ {industry} ]</p>
        </Column>
      </Row>

      <p className="card--employment_text">{text}</p>
      <ul>
        <Icon icon={star} /> {skillsList()}
      </ul>
    </Card>
  );
};
