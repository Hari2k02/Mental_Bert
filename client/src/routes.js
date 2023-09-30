import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import DashboardLayout from './pages/DashboardLayout';
import DashboardAppPage from './pages/DashboardAppPage';
import ChatBot from './pages/Chatbot';
export default function Router() {

    const routes = useRoutes([
        {
            path: '/',
            element: <LandingPage />,
            children: [{ element: <Navigate to="/" replace />, index: true }],
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/dashboard',
            element: <DashboardLayout/> ,
            children: [
                { element: <Navigate to="/dashboard/app" replace />, index: true },
                { path: 'app', element: <DashboardAppPage /> },
            ],
        },
        {
            path: '/chatbot',
            element: <ChatBot />,
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);

    return routes;
}