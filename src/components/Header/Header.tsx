import Image from "next/image";
import styled from 'styled-components';

function Header() {
  return (
    <Ul>
      <Li>
        <H2>MKS</H2>
        <H3>Sistemas</H3>
      </Li>
      <Cart>
        <Image
          src={`/images/icon-cart.svg`}
          width={20}
          height={20}
          alt={"Carrinho"}
        />
        <p>0</p>
      </Cart>
    </Ul>
  );
}

const Ul = styled.ul`
  position: fixed;
  max-height: 44px;
  background-color: #0f52ba;
  color: #fff;
  padding: 28px 88px 28px 65px;
  display: flex;
  justify-content: space-between;
  z-index: 998;
`;

const Li = styled.li`
  display: flex;
  margin: 0;
  :first-child{
    align-items: flex-end;
    margin: 0;
  }
`;

const H2 = styled.h2`
  font-size: 40px;
  font-weight: 600;
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 300;
  margin-left: 6px;
  margin-bottom: 6px;
`;

const Cart = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 90px;
  /* height: 45px; */
  background-color: #fff;
  border-radius: 8px;
  color: #000;
  max-width: 90px;
`;

export default Header;
