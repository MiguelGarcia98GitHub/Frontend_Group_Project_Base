import { actionTypes } from "./action.types";
import { IUser } from "./usersModel";

export type Action = {
    type: string;
    payload: IUser;
};

export const addUserAction = (user: IUser): Action => {
    return {
        type: actionTypes.add,
        payload: user,
    };
};
