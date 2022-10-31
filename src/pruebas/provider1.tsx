import { UserContext } from "./context1";
import { useUsers } from "./use.user";

export function UserContextProvider({ children }: { children: JSX.Element }) {
    const context = useUsers();

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    );
}
