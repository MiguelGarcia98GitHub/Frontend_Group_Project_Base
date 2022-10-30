import { useContext } from "react";
import { RandomContext } from "./context1";

export function TestProviderButton() {
    const { handleAdd } = useContext(RandomContext);

    return (
        <button
            onClick={() => {
                handleAdd({ id: 100, name: "Random" });
            }}
        >
            TEST USECONTEXT WITH PROVIDER BY ADDING SOME VALUE TO THE GLOBAL
            STATE
        </button>
    );
}
