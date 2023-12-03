import React from "react";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";

const NavLinks = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon} = link;
          return (
            <NavLink
              onClick={toggleSidebar}
              to={path}
              key={text}
              className={({ isActive }) =>
                isActive ? "active nav-link" : "inactive nav-link"
              }
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
      })}
    </div>
  );
};

export default NavLinks;
