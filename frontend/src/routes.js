import React from "react";
// import { Navigate } from 'react-router-dom';
import Main from "./views/main";
import Page1 from './views/page1';
import Page2 from './views/page2';
import Page3 from './views/page3';
import Page4 from './views/page4';
import Page5 from './views/page5';
import Page6 from './views/page6';


const routes = [
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/commath-pj",
        element: <Main />,
    },
    {
        path: "commath-pj/page1",
        element: <Page1 />,
    },
    {
        path: "commath-pj/page2",
        element: <Page2 />,
    },
    {
        path: "commath-pj/page3",
        element: <Page3 />,
    },
    {
        path: "commath-pj/page4",
        element: <Page4 />,
    },
    {
        path: "commath-pj/page5",
        element: <Page5 />,
    },
    {
        path: "commath-pj/page6",
        element: <Page6 />,
    },

];

export default routes;