import styled from "styled-components";

function Footer() {
  return <Container>MKS sistemas © Todos os direitos reservados</Container>;
}
const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  background-color: #EEEEEE;
`;
export default Footer;
