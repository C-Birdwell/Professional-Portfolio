import { Card, Column, Heading, Icon, Row } from "@/components";
import type { EmploymentProps } from "./index.types";
import { iconDataNames } from "@/constants";
import { splitArrayInHalf } from "@/utils";

export const Employment: React.FC<EmploymentProps> = ({
  employment,
  flipIn,
  lastItem,
}) => {
  const { company, role, industry, date, text, skills } = employment;

  const { star } = iconDataNames;

  const skillsList = () => {
    const skillsColumn = splitArrayInHalf(skills);

    return (
      <Row breakPoint="tablet">
        <Column>
          <ul className="card--employment_list">
            {skillsColumn[0].map((skill, i) => {
              return (
                <li
                  key={`${company}-${skill}-${i}`}
                  className="card--employment_list_skill"
                >
                  <Icon icon={star} /> <span>{skill}</span>
                </li>
              );
            })}
          </ul>
        </Column>
        <Column>
          <ul className="card--employment_list">
            {skillsColumn[1].map((skill, i) => {
              return (
                <li
                  key={`${company}-${skill}-${i}`}
                  className="card--employment_list_skill"
                >
                  <Icon icon={star} /> <span>{skill}</span>
                </li>
              );
            })}
          </ul>
        </Column>
      </Row>
    );
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
      <Heading size={6}>Summary:</Heading>
      <p className="card--employment_text">{text}</p>
      <Heading size={6}>Technologies:</Heading>
      {skillsList()}
    </Card>
  );
};
