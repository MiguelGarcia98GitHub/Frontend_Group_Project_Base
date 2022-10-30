import { useContext } from "react";
import { UserContext } from "./context1";

export function TestProviderButton() {
    const { handleAdd } = useContext(UserContext);

    return (
        <button
            onClick={() => {
                handleAdd({ id: 100, name: "randomuser" });
            }}
        >
            TEST USECONTEXT WITH PROVIDER BY ADDING SOME VALUE TO THE GLOBAL
            STATE
        </button>
    );
}
