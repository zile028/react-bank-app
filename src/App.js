import './App.css';
import Navbar from "./component/Navbar";
import {Outlet} from "react-router-dom";
import {createContext, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {restoreUsers} from "./store/usersSlice";

export const UsersContext = createContext(null)

const LS_KEY = "users"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(restoreUsers())
    }, [])

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default App;
