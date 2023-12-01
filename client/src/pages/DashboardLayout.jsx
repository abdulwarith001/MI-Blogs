import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import {Sidebar, Navbar} from '../components'

const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Sidebar />
        
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default DashboardLayout