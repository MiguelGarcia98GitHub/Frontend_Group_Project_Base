import { useContext } from "react";
import { UserContext } from "./context1";

export function TestProviderButton() {
    const { handleAdd } = useContext(UserContext);
    const user = "Marcos";

    return (
        <button
            onClick={() => {
                handleAdd({
                    id: Math.floor(Math.random() * 100000),
                    name: user,
                });
            }}
        >
            TEST USECONTEXT WITH PROVIDER BY ADDING SOME VALUE TO THE GLOBAL
            STATE
        </button>
    );
}
