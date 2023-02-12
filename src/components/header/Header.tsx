import ContainerOuter from "components/container-outer/ContainerOuter";
import ContainerInner from "components/container-inner/ContainerInner";
import HeaderStyled from "./HeaderStyled";
import { Contact, MenuRow } from "./components";

const Header = () => (
  <ContainerOuter style={{ margin: "0 auto" }}>
    <HeaderStyled>
      <ContainerInner>
        <Contact />
      </ContainerInner>
    </HeaderStyled>
    <ContainerInner>
      <MenuRow />
    </ContainerInner>
  </ContainerOuter>
);

export default Header;
