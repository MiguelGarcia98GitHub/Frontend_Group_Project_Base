import { useState } from "react";
import { UserContext } from "./context1";
import { IUser, UsersList } from "./usersModel";

export function UserContextProvider({ children }: { children: JSX.Element }) {
    const initialUsers = UsersList;
    const [users, setUsers] = useState(initialUsers);

    const handleAdd = (data: IUser) => {
        let newState = [...users];
        newState.push(data);
        setUsers(newState);
    };

    const context = {
        users,
        handleAdd,
    };

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    );
}
