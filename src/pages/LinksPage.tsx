import { Anchor, Column, PageTemplate, Row } from "@/components";
import { linksArray } from "@/constants";
import type { LinksArray } from "@/lib";
import { chunkArray } from "@/utils";

const chunkedLinks = chunkArray(linksArray, 3);

export const LinksPage: React.FC = () => {
  const renderContent = (data: LinksArray) => {
    return data.map((link, i) => {
      const { text, href, target } = link;
      return (
        <Column key={`link-page-link-${i}`}>
          <Anchor href={href} text={text} target={target}></Anchor>
        </Column>
      );
    });
  };

  const renderRows = () => {
    return chunkedLinks.map((val, i) => {
      return (
        <Row key={`link-row-${i}`} gutter={10} breakPoint="tablet">
          {renderContent(val)}
        </Row>
      );
    });
  };

  return (
    <PageTemplate
      title="Links & Documents"
      customClass="links"
      subtitle="A demonstration of animations built into the Card component."
    >
      {renderRows()}
    </PageTemplate>
  );
};
