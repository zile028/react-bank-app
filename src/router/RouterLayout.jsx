import React from 'react';
import {Outlet} from "react-router-dom";

function RouterLayout() {
    return (
        <>
            <Outlet/>
        </>
    );
}

export default RouterLayout;