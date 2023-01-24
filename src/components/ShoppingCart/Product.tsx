import styled from "styled-components";
import Image from "next/image";

function Product() {
  return (
    <Container>
      <Image
        src={`/images/icon-cart.svg`}
        width={30}
        height={30}
        alt={"procuct"}
      />
      <p>Apple Watch Series 4 GPS</p>
      <ProductCount>
        <div>Qtd:</div>
        <div>| 0 |</div>
      </ProductCount>
      <Price>R$399</Price>
      <ButtonClose>x</ButtonClose>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  max-width: 379px;
  width: 100%;
  padding: 19px 23px;
  border-radius: 8px;
  background-color: #fff;
  justify-content: space-between;
  margin: initial;
  margin-bottom: 28px;

  > p {
    max-width: 113px;
  }
`;

const ProductCount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > div:first-child {
    font-weight: 400;
    font-size: 5px;
    line-weight: 6px;
  }

  > div:last-child {
    border-radius: 4px;
    border: 0.3px solid #bfbfbf;

    :before {
      content: "-";
    }

    :after {
      content: "+";
    }

    :after,
    :before {
      padding: 8px;
    }
  }
`;

const Price = styled.div`
  font-size: 14px;
  line-weight: 17px;
  font-weight: 700;
`;

const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -6px;
  top: -6px;
  left: initial;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  background-color: #000;
  color: #fff;
  border: 0;
  font-size: 14px;
  font-weight: 400;
`;

export default Product;
