//Import react library
import React from 'react';

//Import Components
import HomeComponent from './components/home-component/home-component';
//Trading
import ExchangeComponent from './components/trade/exchange-component/exchange-component';
import MarginComponent from './components/trade/margin-component/margin-component';
//Auth
import LoginComponent from './components/auth/login-component/login-component';
import RegisterComponent from './components/auth/register-component/register-component';
import ForgotPasswordComponent from './components/auth/forgot-password-component/forgot-password-component';
//Helpers
import SupportComponent from './components/helpers/support-component/support-component';
import AnnouncementsComponent from './components/helpers/announcements-component/announcements-component';
import PostsComponent from './components/helpers/posts-component/posts-component';
import FAQComponent from './components/helpers/faq-component/faq-component';
//Others
import NotFoundComponent from './components/not-found-component/not-found-component';

const routes = [{
        breadcrumbName: 'Home',
        path: '/',
        exact: true,
        component: () => < HomeComponent / >
    },
    {
        breadcrumbName: 'Exchange',
        path: '/exchange',
        exact: true,
        component: () => < ExchangeComponent / >
    },
    {
        breadcrumbName: 'Margin',
        path: '/margin',
        exact: true,
        component: () => < MarginComponent / >
    },
    {
        breadcrumbName: 'Support',
        path: '/support',
        exact: true,
        component: () => < SupportComponent / > ,
        breadcrumbIntl: 'app.breadcrumb.support'
    },
    {
        breadcrumbName: 'Announcements',
        path: '/announcements',
        exact: true,
        component: () => < AnnouncementsComponent / > ,
        breadcrumbIntl: 'app.breadcrumb.announcements'
    },
    {
        breadcrumbName: 'Posts',
        path: '/posts',
        exact: true,
        component: () => < PostsComponent / > ,
        breadcrumbIntl: 'app.breadcrumb.post'
    },
    {
        breadcrumbName: 'FAQ',
        path: '/faq',
        exact: true,
        component: () => < FAQComponent / > ,
        breadcrumbIntl: 'app.breadcrumb.faq'
    },
    {
        path: '/login',
        exact: true,
        component: () => < LoginComponent / >
    },
    {
        path: '/register',
        exact: true,
        component: () => < RegisterComponent / >
    },
    {
        path: '/forgot-password',
        exact: true,
        component: () => < ForgotPasswordComponent / >
    },
    {
        path: '',
        exact: false,
        component: () => < NotFoundComponent / >
    }
];
export default routes;