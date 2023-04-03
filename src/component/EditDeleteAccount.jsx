import Layout from "./Layout";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../store/usersSlice";

function EditDeleteAccount() {
    const {users} = useSelector((state) => state.userStore)
    const dispatch = useDispatch()
    
    const renderUsers = () => {
        return users.map((user) => {
            return <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.deposit}</td>
                <td>
                    <Link className="btn btn-warning me-2" to={"/editAccount/" + user.id}>Edit</Link>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(deleteUser(user.id))
                    }}>Delete
                    </button>
                </td>
            </tr>
        })
    }

    return (
        <Layout title={"Edit-Delete Accounts"}>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Deposit</th>
                    <th>Edit - Delete</th>
                </tr>
                </thead>
                <tbody>
                {renderUsers()}
                </tbody>
            </table>
        </Layout>
    );
}

export default EditDeleteAccount;