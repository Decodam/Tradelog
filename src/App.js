import React, {  } from 'react';
import Routes from './app/config/Routes';
import HomePage from "./app/pages/HomePage";
import TradesPage from "./app/pages/TradesPage";
import ToolsPage from "./app/pages/ToolsPage";
import SettingsPage from "./app/pages/SettingsPage";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Routes><HomePage /></Routes>,
    },
    {
        path: "/trades",
        element: <Routes><TradesPage /></Routes>,
    },
    {
        path: "/tools",
        element: <Routes><ToolsPage /></Routes>,
    },
    {
        path: "/settings",
        element: <Routes><SettingsPage /></Routes>,
    },
]);


const App = (props) => {
    return(
        <>
            <RouterProvider router={router} />
        </>
    );
}


export default App;