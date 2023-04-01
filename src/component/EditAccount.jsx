import React, {useContext, useEffect, useState} from 'react';
import Layout from "./Layout";
import {UsersContext} from "../App";
import {useNavigate, useParams} from "react-router-dom";

function EditAccount() {
    const [inputData, setInputData] = useState({name: "", phone: "", email: "", deposit: ""});
    const {users, setUsers} = useContext(UsersContext);
    const redirect = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        setInputData(users.find(user => user.id === parseInt(id)))
    }, [])


    const inputHandler = (e) => {
        let copyInputData = {...inputData}
        copyInputData[e.target.name] = e.target.value
        setInputData(copyInputData)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setUsers(users.map(user => {
            if (user.id === inputData.id) {
                return inputData
            } else {
                return user
            }
        }))
        redirect("/editDeleteAccount")
    }
    return (
        <Layout title={"Edit account"}>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name" name="name"
                    value={inputData.name}
                    onInput={inputHandler}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Email"
                    name="email"
                    value={inputData.email}
                    onInput={inputHandler}/>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Phone"
                    name="phone"
                    value={inputData.phone}
                    onInput={inputHandler}/>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Deposit"
                    name="deposit"
                    value={inputData.deposit}
                    onInput={inputHandler}/>
                <button className="btn btn-primary px-5">Save Changes</button>
            </form>
        </Layout>
    );
}

export default EditAccount;