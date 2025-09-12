import { Card, Column, Heading, Row } from "@/components";
import type { EmploymentProps } from "./index.types";

export const Employment: React.FC<EmploymentProps> = ({
  employment,
  flipIn,
  lastItem,
}) => {
  const { company, role, industry, date, text } = employment;
  return (
    <Card
      border
      classNames={["employment"]}
      flipIn={flipIn}
      marginBottom={lastItem ? 0 : 20}
    >
      <Row>
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
    </Card>
  );
};
