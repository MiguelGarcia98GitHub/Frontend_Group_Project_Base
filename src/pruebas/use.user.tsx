import { useReducer } from "react";
import { UserContext } from "./context1";
import { usersReducer } from "./reducer";
import { IUser } from "./usersModel";
import * as actions from "./action.creator";

export function useUsers() {
    const initialState: Array<IUser> = [];
    const [users, dispatch] = useReducer(usersReducer, initialState);

    const handleAdd = (newUser: IUser) => {
        dispatch(actions.addUserAction(newUser));
    };

    return {
        handleAdd,
    };
}
