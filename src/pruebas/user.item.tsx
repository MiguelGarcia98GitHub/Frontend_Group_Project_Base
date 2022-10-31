import { useContext } from "react";
import { UserContext } from "./context1";
import { useUsers } from "./use.user";
import { IUser } from "./usersModel";

export function UserItem({ item }: { item: IUser }) {
    const { handleAdd } = useContext(UserContext);
    // const { handleAdd } = useUsers();

    return (
        <div>
            <button
                onClick={() => {
                    handleAdd(item);
                }}
            >
                HANDLEADD CON REDUCER Y FLUX
            </button>
        </div>
    );
}
