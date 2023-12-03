import React, {useState, useContext, createContext} from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import {Sidebar, Navbar} from '../components'
import MobileSidebar from '../components/MobileSidebar'


const DashboardContext = createContext();

const DashboardLayout = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar)
    console.log(showMobileSidebar)
  }

  return (
    <DashboardContext.Provider value={{showMobileSidebar, toggleSidebar}}>
    <Wrapper>
      <main className="dashboard">
        <Sidebar />
        <MobileSidebar/>
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>
  );
}

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout