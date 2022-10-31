import { useReducer, useState } from "react";
import { UserContext } from "./context1";
import { usersReducer } from "./reducer";
import { IUser, UsersList } from "./usersModel";
import * as actions from "./action.creator";

export function UserContextProvider({ children }: { children: JSX.Element }) {
    const initialUsers = UsersList;
    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const handleAdd = (data: IUser) => {
        dispatch(actions.addUserAction(data));
    };

    const context = {
        users,
        handleAdd,
    };

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    );
}
