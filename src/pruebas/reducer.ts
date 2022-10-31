import { actionTypes } from "./action.types";
import { Action } from "./action.creator";
import { IUser } from "./usersModel";

export function usersReducer(state: Array<IUser>, action: Action) {
    let payload: IUser;
    switch (action.type) {
        case actionTypes.add:
            payload = action.payload as IUser;
            return [...state, payload];

        default:
            return [...state];
    }
}
