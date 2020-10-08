import React from 'react';
import {Navigate} from 'react-router-dom';
import DashboardLayout from '../src/layouts/DashboardLayout';
import MainLayout from '../src/layouts/MainLayout';
import AccountView from '../src/views/account/AccountView';
import CustomerListView from '../src/views/customer/CustomerListView';
import DashboardView from '../src/views/reports/DashboardView';
import LoginView from '../src/views/auth/LoginView';
import NotFoundView from '../src/views/errors/NotFoundView';
import ProductListView from '../src/views/product/ProductListView';
import RegisterView from '../src/views/auth/RegisterView';
import SettingsView from '../src/views/settings/SettingsView';
import PageTest from '../src/views/page_test';
import Drawer1 from '../src/views/drawer_test/index.js';
import Drawer2 from '../src/views/drawer_test/drawer2.js';

const routes2 = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'pagetest', element: <PageTest /> },
      { path: 'drawer1', element: <Drawer1 /> },
      { path: 'drawer2', element: <Drawer2 /> },
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes2;
