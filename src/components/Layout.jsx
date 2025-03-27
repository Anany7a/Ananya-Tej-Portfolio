import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ui/ScrollToTop';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Outlet />
      <ScrollToTop />
    </div>
  );
};

export default Layout;