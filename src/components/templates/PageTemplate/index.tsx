import { Card, Heading } from "@/components/atoms";
import { type PageDefaultProps } from "./index.types";
import { convertVariantClassNames } from "@/utils";

export const PageTemplate: React.FC<PageDefaultProps> = ({
  title,
  subtitle,
  customClass,
  children,
  textContent,
}) => {
  const classNames = `${convertVariantClassNames("page", [
    customClass ? customClass : title,
  ])}`;

  const renderTextContent = () => {
    return textContent?.map((val, i) => {
      return i > 0 ? (
        <p key={`page-text-content-${i}`}>{val}</p>
      ) : (
        <h4 key={`page-text-content-${i}`}>{val}</h4>
      );
    });
  };

  return (
    <div className={classNames}>
      <Card border parentName="page" marginBottom={0}>
        <div className={`page_card_title`}>
          <Heading size={2}>{title}</Heading>
          <Heading size={3}>{subtitle}</Heading>
        </div>
        <section>
          {children}
          {renderTextContent()}
        </section>
      </Card>
    </div>
  );
};
