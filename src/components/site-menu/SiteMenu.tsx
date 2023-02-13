import { useState } from "react";
import { company, menu } from "../../constants";
import SiteMenuStyled from "./SiteMenuStyled";
import SiteMenuItem from "./SiteMenuItem";
import { IMenu } from "constants/menu";

const getActiveUrl = () => {
  const urlArray = window.location.href.split("/");
  return urlArray[3];
};

const MenuRow = () => {
  const [active, setActive] = useState(getActiveUrl());

  const menuClickHandler = (menuItem: IMenu) => {
    setTimeout(() => {
      if (getActiveUrl() === menuItem.url) {
        setActive(menuItem.url);
      }
    }, 200);
  };

  return (
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
                  active={menuItem.url === active}
                  menuClickHandler={menuClickHandler}
                />
              ))}
          </ul>
        </div>
      </div>
    </SiteMenuStyled>
  );
};

export default MenuRow;
