import { useState, type FC } from "react";
import { Row, PageTemplate, Card, Column, Button } from "@/components";

export const InformationPage: FC = () => {
  const initialState = {
    card1: 0,
    card2: 0,
    card3: 0,
    card4: 0,
    card5: 0,
    card6: 0,
    card7: 0,
  };
  const [cardKeys, setCardKeys] = useState(initialState);

  const invisibleBox = <div style={{ height: "80px" }} />;

  const cardOne = (
    <Card
      border
      marginBottom={20}
      animationSlide="left"
      key={`card1-${cardKeys.card1}`}
    >
      <h4 className="center">Left</h4>
      {invisibleBox}
      <Button
        onClick={() =>
          setCardKeys((prev) => ({ ...prev, card1: prev.card1 + 1 }))
        }
        backgroundTheme="success"
        buttonText="Animate Me"
      />
    </Card>
  );

  const cardTwo = (
    <Card
      border
      marginBottom={20}
      animationSlide="top"
      key={`card2-${cardKeys.card2}`}
    >
      <h4 className="center">Top</h4>
      {invisibleBox}

      <Button
        onClick={() =>
          setCardKeys((prev) => ({ ...prev, card2: prev.card2 + 1 }))
        }
        backgroundTheme="success"
        buttonText="Animate Me"
      />
    </Card>
  );

  const cardThree = (
    <Card
      border
      marginBottom={20}
      animationSlide="bottom"
      key={`card3-${cardKeys.card3}`}
    >
      <h4 className="center">Bottom</h4>
      {invisibleBox}

      <Button
        onClick={() =>
          setCardKeys((prev) => ({ ...prev, card3: prev.card3 + 1 }))
        }
        backgroundTheme="success"
        buttonText="Animate Me"
      />
    </Card>
  );

  const cardFour = (
    <Card
      border
      marginBottom={20}
      animationSlide="right"
      key={`card4-${cardKeys.card4}`}
    >
      <h4 className="center">Right</h4>
      {invisibleBox}

      <Button
        onClick={() =>
          setCardKeys((prev) => ({ ...prev, card4: prev.card4 + 1 }))
        }
        backgroundTheme="success"
        buttonText="Animate Me"
      />
    </Card>
  );

  const cardFive = (
    <Card
      border
      marginBottom={20}
      flipIn="left"
      key={`card5-${cardKeys.card5}`}
    >
      <h4 className="center">Flip In Left</h4>
      {invisibleBox}

      <Button
        onClick={() =>
          setCardKeys((prev) => ({ ...prev, card5: prev.card5 + 1 }))
        }
        backgroundTheme="success"
        buttonText="Animate Me"
      />
    </Card>
  );

  const cardSix = (
    <Card
      border
      marginBottom={20}
      flipIn="right"
      key={`card6-${cardKeys.card6}`}
    >
      <h4 className="center">Flip In Right</h4>
      {invisibleBox}

      <Button
        onClick={() =>
          setCardKeys((prev) => ({ ...prev, card6: prev.card6 + 1 }))
        }
        backgroundTheme="success"
        buttonText="Animate Me"
      />
    </Card>
  );

  const cardSeven = (
    <Card
      border
      marginBottom={20}
      fadeIn
      classNames={["gradient--background"]}
      key={`card7-${cardKeys.card7}`}
    >
      <h4 className="center">Fade In</h4>
      {invisibleBox}

      <Button
        onClick={() =>
          setCardKeys((prev) => ({ ...prev, card7: prev.card7 + 1 }))
        }
        backgroundTheme="success"
        buttonText="Animate Me"
      />
    </Card>
  );

  return (
    <PageTemplate
      title="Site Information"
      subtitle="Information pertaining to the construction and hosting of my portfolio website."
    >
      <Row gutter={10} breakPoint="tablet">
        <Column>{cardOne}</Column>
        <Column>{cardTwo}</Column>
      </Row>
      <Row gutter={10} breakPoint="tablet">
        <Column>{cardThree}</Column>
        <Column>{cardFour}</Column>
      </Row>
      <Row gutter={10} breakPoint="tablet">
        <Column>{cardFive}</Column>
        <Column>{cardSix}</Column>
      </Row>
      <Row breakPoint="tablet">
        <Column>{cardSeven}</Column>
      </Row>
    </PageTemplate>
  );
};
