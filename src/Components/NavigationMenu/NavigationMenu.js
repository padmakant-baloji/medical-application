import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData } from "./NavbarData";
import css from "./NavigationMenu.module.scss";

export const NavigationMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={css.navbar}>
        {!sidebar ? (
          <Link to="#" className={css["menu-bars"]}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>):
        // ) : (
        //   <div className={css["navbar-toggle"]}>
            (<Link to="#" className={css["menu-bars"]}>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          // </div>
        )}
      </div>
      <nav
        className={
          sidebar ? `${css["nav-menu"]} ${css["active"]}` : css["nav-menu"]
        }
      >
        <ul className={css["nav-menu-items"]} onClick={showSidebar}>
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={css[item.cName]}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
