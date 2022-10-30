import { FilterInputTextData } from "./pruebas/FilterInputTextData";
import { RandomContextProvider } from "./pruebas/provider1";
import { TestProviderButton } from "./pruebas/TestProviderButton";

function App() {
    return (
        <div className="app">
            <RandomContextProvider>
                <FilterInputTextData></FilterInputTextData>
                <TestProviderButton />
            </RandomContextProvider>
        </div>
    );
}

export default App;
