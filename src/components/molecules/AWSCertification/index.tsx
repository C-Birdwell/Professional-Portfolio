import { Column, Row, Skill } from "@/components";
import { certificationData } from "@/constants";

export const AWSCertification = () => {
  const imagePract = certificationData[0];
  const imageDev = certificationData[1];
  const imageCAPM = certificationData[2];

  return (
    <Row gutter={10} breakPoint="tablet">
      <Column>
        <Skill
          path={imagePract.path}
          labels={imagePract.labels}
          flipIn="left"
        />
      </Column>
      <Column>
        <Skill path={imageDev.path} labels={imageDev.labels} fadeIn />
      </Column>
      <Column>
        <Skill path={imageCAPM.path} labels={imageCAPM.labels} flipIn="right" />
      </Column>
    </Row>
  );
};
