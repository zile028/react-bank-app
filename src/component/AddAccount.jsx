import React, {useContext, useState} from 'react';
import Layout from "./Layout";
import {UsersContext} from "../App";
import {useNavigate} from "react-router-dom";

function AddAccount() {
    const [inputData, setInputData] = useState({});
    const {users, setUsers} = useContext(UsersContext);
    const redirect = useNavigate()
    const inputHandler = (e) => {
        let copyInputData = {...inputData}
        copyInputData[e.target.name] = e.target.value
        setInputData(copyInputData)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setUsers([...users, {...inputData, id: new Date().getTime()}])
        redirect("/")
    }

    return (
        <Layout title={"Add Accounts"}>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name" name="name"
                    onInput={inputHandler}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    onInput={inputHandler}/>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Phone"
                    name="phone"
                    onInput={inputHandler}/>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Deposit"
                    name="deposit"
                    onInput={inputHandler}/>
                <button className="btn btn-primary px-5">ADD USER</button>
            </form>
        </Layout>
    );
}

export default AddAccount;