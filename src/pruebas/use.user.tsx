import { useMemo, useReducer } from "react";
import { usersReducer } from "./reducer";
import { IUser } from "./usersModel";
import * as actions from "./action.creator";
import { UserApi } from "../services/user.api";

export function useUsers() {
    const initialState: Array<IUser> = [];
    const [users, dispatch] = useReducer(usersReducer, initialState);
    const api = useMemo(() => {
        return new UserApi();
    }, []);

    const handleAdd = (newUser: IUser) => {
        api.createUser(newUser).then((user: IUser) => {
            dispatch(actions.addUserAction(user));
        });
    };

    return {
        handleAdd,
        users,
    };
}
