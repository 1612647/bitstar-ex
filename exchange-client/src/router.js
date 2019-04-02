//Import react library
import React from 'react';

//Import Component
import ExchangeComponent from './components/trade/exchange-component/exchange-component';
import MarginComponent from './components/trade/margin-component/margin-component';
import HomeComponent from './components/home-component/home-component';
import NewsComponent from './components/news-component/news-component';
import LoginComponent from './components/auth/login-component/login-component';
import RegisterComponent from './components/auth/register-component/register-component';
import ForgotPasswordComponent from './components/auth/forgot-password-component/forgot-password-component';
import SupportComponent from './components/support-component/support-component';
import NotFoundComponent from './components/not-found-component/not-found-component';

const routes = [{
        path: '/',
        exact: true,
        component: () => <HomeComponent />
    },
    {
        path: '/exchange',
        exact: true,
        component: () => <ExchangeComponent />
    },
    {
        path: '/margin',
        exact: true,
        component: () => <MarginComponent />
    },
    {
        path: '/news',
        exact: true,
        component: () => <NewsComponent />
    },
    {
        path: '/support',
        exact: true,
        component: () => <SupportComponent />
    },
    {
        path: '/login',
        exact: true,
        component: () => <LoginComponent />
    },
    {
        path: '/register',
        exact: true,
        component: () => <RegisterComponent />
    },
    {
        path: '/forgot-password',
        exact: true,
        component: () => <ForgotPasswordComponent />
    },
    {
        path: '',
        exact: false,
        component: () => <NotFoundComponent />
    }
];
export default routes;