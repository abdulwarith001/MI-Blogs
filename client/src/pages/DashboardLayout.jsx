import React, {useState, useContext, createContext} from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import {Sidebar, Navbar} from '../components'
import MobileSidebar from '../components/MobileSidebar'
import { useSelector } from 'react-redux'


const DashboardContext = createContext();

const DashboardLayout = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar)
  }
  const { userInfo } = useSelector((state) => state.auth);


  return (
    <DashboardContext.Provider value={{showMobileSidebar, toggleSidebar, user: userInfo}}>
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