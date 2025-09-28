import { Anchor, Card, Column, PageTemplate, Row } from "@/components";
import { linksArray } from "@/constants";
import type { LinksArray } from "@/lib";
import { chunkArray } from "@/utils";

const chunkedLinks = chunkArray(linksArray, 3);

const switchIndex = (i: number) => {
  switch (i) {
    case 0:
      return "push-right";
    case 2:
      return "push-left";

    default:
      return "";
  }
};

export const LinksPage: React.FC = () => {
  const renderContent = (data: LinksArray) => {
    const contentColumn = data.map((link, i) => {
      const { text, href, target } = link;

      return (
        <Column key={`link-page-link-${i}`}>
          <Card border classNames={["transparent", switchIndex(i)]}>
            <Column classNames={["justify-center", "align-center"]}>
              <Anchor href={href} text={text} target={target} />
            </Column>
          </Card>
        </Column>
      );
    });

    let emptyColumnsNeeded = 0;
    const currentLength = data.length;

    if (currentLength < 3) {
      emptyColumnsNeeded = 3 - currentLength;
    }
    const emptyColumns = Array.from({ length: emptyColumnsNeeded }, (_, i) => (
      <Column key={`empty-skills-column-${i}`} />
    ));
    return (
      <>
        {contentColumn}
        {emptyColumns}
      </>
    );
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
