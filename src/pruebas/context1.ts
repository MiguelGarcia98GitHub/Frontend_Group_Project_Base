import { createContext } from "react";
import { RandomModel1 } from "./randomModel";

const initialContext: {
    list: Array<RandomModel1>;
    handleAdd: (data: { id: number; name: string }) => void;
} = {
    list: [],
    handleAdd: () => undefined,
};

export const RandomContext = createContext(initialContext);
