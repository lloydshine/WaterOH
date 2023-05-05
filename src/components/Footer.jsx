import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #29aae1;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #ffff;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>Copyright © 2023 Wateroh</FooterText>
    </FooterContainer>
  );
}

export default Footer;
