import { IUser } from "./usersModel";
import { createContext } from "react";

const initialContext: {
    users: Array<IUser>;
    handleAdd: (data: { id: number; name: string }) => void;
} = {
    users: [],
    handleAdd: () => undefined,
};

export const UserContext = createContext(initialContext);
