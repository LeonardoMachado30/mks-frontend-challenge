import styled from "styled-components";
import Image from "next/image";

function Card() {
  return (
    <Container>
      <CardBody>
        <Image
          src={`/images/icon-sale.svg`}
          width={111}
          height={138}
          alt={`icone de compra`}
        />
        <div className="flex-row">
          <Title>Apple Watch Series 4 GPS</Title>
          <Price>R$399</Price>
        </div>
        <Description>
          Redesigned from scratch and completely revised.
        </Description>
      </CardBody>
      <CardFooter title={`Comprar`}>
        <Image
          src={`/images/icon-sale.svg`}
          width={16}
          height={16}
          alt={`icone de compra`}
        />
        <p>COMPRAR</p>
      </CardFooter>
    </Container>
  );
}

const Container = styled.div`
  max-width: 218px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 14px;
  gap: 14px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  background-color: #0f52ba;
  color: #fff;
  height: 32px;
  border-radius: 0px 0px 8px 8px;
  cursor: pointer;
`;

const Title = styled.p`
  font-weigth: 400;
`;

const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #373737;
  border-radius: 6px;
  font-weight: 700;
  color: #fff;
  max-height: 26px;
  padding: 4px 7px;
  line-height: 15px;
`;

const Description = styled.p`
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
`;

export default Card;
