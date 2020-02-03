import React from "react";

import { Container, AnswerText, AnswerTextContainer, I } from "./styles";

export default function AnswerItem({
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  answerId,
  questionId,
  selected = false,
  selections,
  onSelect = () => {},
  id
}) {
  const handleSelect = () => {
    onSelect({
      ...selections,
      [questionId]: answerId
    });
  };

  return (
    <Container selected={selected} onClick={handleSelect}>
      <AnswerTextContainer>
        <AnswerText>{text}</AnswerText>
      </AnswerTextContainer>
      <I className="material-icons" selected={selected}>
        {selected ? "check_box" : "check_box_outline_blank"}
      </I>
    </Container>
  );
}