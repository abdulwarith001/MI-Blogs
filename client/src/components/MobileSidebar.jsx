import React from 'react'
import Wrapper from '../assets/wrappers/MobileSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import { FaTimes } from "react-icons/fa";
import Logo from './Logo';
import NavLinks from './Navlinks';

const MobileSidebar = () => {
    const { toggleSidebar, showMobileSidebar } = useDashboardContext();
    return (
        <Wrapper>

      <div
        className={
          showMobileSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
            >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
            <NavLinks/>
        </div>
      </div>
        </Wrapper>
    );
}

export default MobileSidebar