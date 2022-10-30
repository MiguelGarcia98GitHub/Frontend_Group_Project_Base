import { RandomModel1, randomModelList } from "./randomModel";
import { useState } from "react";
import { RandomContext } from "./context1";

export function RandomContextProvider({ children }: { children: any }) {
    const initialRandoms = randomModelList;
    const [randoms, setRandoms] = useState(initialRandoms);

    const handleAdd = (data: RandomModel1) => {
        let newState = [...randoms];
        newState.push(data);
        setRandoms(newState);
    };

    const context = {
        list: randoms,
        handleAdd,
    };

    return (
        <RandomContext.Provider value={context}>
            {children}
        </RandomContext.Provider>
    );
}
