import { ContainerInner, ContainerOuter } from "components";
import ThinBannerStyled from "./ThinBannerStyled";
import { Link } from "react-router-dom";

const ThinBanner = () => {
  return (
    <ThinBannerStyled>
      <ContainerInner>
        <div>
          <div>
            <span>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/logos/butterflymx-with-bg.png`}
                alt={"Butterfly mx"}
              />
            </span>
            <span>Certified Installer</span>
          </div>

          <div>
            <Link to={`/assessment`}>
              Get started with your free assessment
            </Link>
          </div>
        </div>
      </ContainerInner>
    </ThinBannerStyled>
  );
};

export default ThinBanner;
