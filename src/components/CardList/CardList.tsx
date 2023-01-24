import styled from "styled-components";
import Card from "./Card";

function CardList() {
  return (
    <Section>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  margin: 0 auto;
  max-width: 938px;
  width: 100%;
  padding-top: 116px;
  padding-bottom: 172px;
`;

export default CardList;
