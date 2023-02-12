import { ContainerOuter, ContainerInner, SiteMenu } from "components";
import HeaderStyled from "./HeaderStyled";
import { Contact } from "./components";

const Header = () => (
  <ContainerOuter style={{ margin: "0 auto" }}>
    <HeaderStyled>
      <ContainerInner>
        <Contact />
      </ContainerInner>
    </HeaderStyled>
    <ContainerInner>
      <SiteMenu />
    </ContainerInner>
  </ContainerOuter>
);

export default Header;
