import React, {useContext} from 'react';
import {UsersContext} from "../App";
import Layout from "./Layout";

function Accounts() {

    const {users} = useContext(UsersContext)

    const renderUsers = () => {
        return users.map((user) => {
            return <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.deposit}</td>
            </tr>
        })
    }

    return (
        <Layout title={"Accounts"}>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Deposit</th>
                </tr>
                </thead>
                <tbody>
                {renderUsers()}
                </tbody>
            </table>
        </Layout>
    );
}

export default Accounts;