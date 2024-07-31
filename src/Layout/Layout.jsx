import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

const Layout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`flex min-h-screen  w-full`}>
      {isSidebarVisible && <Sidebar />}
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <Content />
      </div>
    </div>
  );
};

export default Layout;
