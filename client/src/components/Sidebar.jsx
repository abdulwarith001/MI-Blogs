import React from "react";
import Wrapper from "../assets/wrappers/Sidebar";
import NavLinks from "./Navlinks";
import Logo from "./WhiteLogo";
// import { useDashboardContext } from "../pages/DashboardLayout";

const Sidebar = () => {
//   const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className="sidebar-container show-sidebar"
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
