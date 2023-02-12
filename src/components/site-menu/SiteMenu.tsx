import { company, menu } from "../../constants";
import SiteMenuStyled from "./SiteMenuStyled";
import SiteMenuItem from "./SiteMenuItem";

const MenuRow = () => (
  <SiteMenuStyled>
    <div>
      <div>
        <section>
          <h2>{company.NAME}</h2>
          <h5>{company.TAGLINE}</h5>
        </section>
      </div>
      <div>
        <ul>
          {menu &&
            menu.map((menuItem) => (
              <SiteMenuItem
                menuItem={menuItem}
                key={menuItem.label}
                active={false}
              />
            ))}
        </ul>
      </div>
    </div>
  </SiteMenuStyled>
);

export default MenuRow;
