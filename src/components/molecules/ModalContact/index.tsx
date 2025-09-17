import { Button, Column } from "@/components";

export const ModalContact: React.FC = () => {
  return (
    <div className="modal_card_contact">
      <Column>
        <Button
          buttonText="Phone"
          onClick={() => {}}
          backgroundTheme="primary"
          marginBottom={40}
        />
        <Button
          buttonText="Email"
          onClick={() => {}}
          backgroundTheme="primary"
          marginBottom={40}
        />
        <Button
          buttonText="LinkedIn"
          onClick={() => {}}
          backgroundTheme="primary"
          marginBottom={40}
        />
      </Column>
    </div>
  );
};
