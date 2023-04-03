import {createSlice} from "@reduxjs/toolkit";

const LS_KEY = "users"

const initialState = {
    users: []
}

const usersSlice = createSlice({
    name: "usersDb",
    initialState,
    reducers: {

        restoreUsers: (state) => {
            if (localStorage.hasOwnProperty(LS_KEY)) {
                state.users = JSON.parse(localStorage.getItem(LS_KEY))
                return
            }
            state.users = []
        },

        addUser: (state, action) => {
            state.users.push({...action.payload, id: new Date().getTime()})
            localStorage.setItem(LS_KEY, JSON.stringify(state.users))
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
            localStorage.setItem(LS_KEY, JSON.stringify(state.users))
        },
        updateUser: (state, {payload}) => {
            state.users = state.users.map(user => {
                if (user.id === payload.id) {
                    return payload
                } else {
                    return user
                }
            })
            localStorage.setItem(LS_KEY, JSON.stringify(state.users))
        }
    }
})

export const {restoreUsers, updateUser, addUser, deleteUser} = usersSlice.actions
export default usersSlice.reducer