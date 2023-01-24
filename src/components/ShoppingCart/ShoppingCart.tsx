import styled from "styled-components";
import Product from "./Product";

function ShoppingCart() {
  return (
    <Container>
      <CartBody>
        <div className="flex-row">
          <h3>Carrinho de compras</h3>
          <ButtonClose>X</ButtonClose>
        </div>

        <Product />
        <Product />
        <Product />
      </CartBody>
      <CartFooter>Finalizar Compra</CartFooter>
    </Container>
  );
}

const Container = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: initial;
  max-width: 486px;
  width: 100%;
  background-color: #0f52ba;
  z-index: 999;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CartBody = styled.div`
  padding: 36px 22px 42px 47px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-bottom: 70px;

    > h3 {
      font-weight: 700;
      font-size: 27px;
      line-weight: 32px;
    }
  }
`;

const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 38px;
  height: 38px;
  background-color: #000;
  color: #fff;
  border: 0;
  font-size: 28px;
  line-height: 15px;
  font-weight: 400;
`;

const CartFooter = styled.div`
  width: 100%;
  padding: 39px 103px 43px 134px;
  font-weight: 700;
  font-size: 28px;
  line-weight: 15px;
  color: #fff;
  background-color: #000;
  bottom: 0;
`;

export default ShoppingCart;
