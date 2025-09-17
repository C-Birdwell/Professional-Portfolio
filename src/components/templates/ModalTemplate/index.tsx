import type { ModalTemplateProps } from "./index.types";
import {
  Card,
  Button,
  //ModalNav,
  Heading,
} from "@/components";

export const ModalTemplate: React.FC<ModalTemplateProps> = ({
  title,
  sizeType = "medium",
  backgroundTheme = "light",
  children,
  // modalIndex,
  // modalIndexLength,
  // onNext,
  // onPrev,
  onDismiss,
  customActions,
}) => {
  const customActionsClassName =
    customActions !== undefined &&
    customActions !== null &&
    customActions.length > 0
      ? "custom-actions"
      : "";
  const modalTemplateClassNames = [
    sizeType,
    backgroundTheme,
    customActionsClassName,
  ];

  return (
    <Card classNames={modalTemplateClassNames} parentName="modal">
      <div className="modal_card_header">
        <Heading size={3}>{title}</Heading>
        <Button
          onClick={onDismiss}
          buttonText="X"
          backgroundTheme={"danger"}
          parentName="modal_card_header"
        />
      </div>
      <div className="modal_card_content">{children}</div>
      {/* <ModalNav
        modalIndex={modalIndex}
        modalIndexLength={modalIndexLength}
        onNext={onNext}
        onPrev={onPrev}
        onDismiss={onDismiss}
        customActions={customActions}
      /> */}
    </Card>
  );
};
