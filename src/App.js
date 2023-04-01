import './App.css';
import Navbar from "./component/Navbar";
import {Outlet} from "react-router-dom";
import {createContext, useState} from "react";

export const UsersContext = createContext(null)

const userDB = [
    {
        id: 1,
        name: "Dejan",
        phone: "111-222-333",
        email: "dejan@mail.com",
        deposit: 2000
    },
    {
        id: 2,
        name: "Milica",
        phone: "444-555-666",
        email: "milica@mail.com",
        deposit: 3000
    }
]

function App() {
    const [users, setUsers] = useState(userDB);

    return (
        <>
            <Navbar/>
            <UsersContext.Provider value={{users, setUsers}}>
                <Outlet/>
            </UsersContext.Provider>
        </>
    );
}

export default App;
