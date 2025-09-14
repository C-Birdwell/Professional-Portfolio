import { Column, Row, Skill } from "@/components";
import { awsImageData } from "@/constants";

export const AWSCertification = () => {
  const imagePract = awsImageData[0];
  const imageDev = awsImageData[1];

  return (
    <Row gutter={10}>
      <Column>
        <Skill
          path={imagePract.path}
          labels={imagePract.labels}
          flipIn="left"
        />
      </Column>
      <Column>
        <Skill path={imageDev.path} labels={imageDev.labels} flipIn="right" />
      </Column>
    </Row>
  );
};
