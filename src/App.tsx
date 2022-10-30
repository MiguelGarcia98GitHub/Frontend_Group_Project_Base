import { UserContextProvider } from "./pruebas/provider1";
import { TestProviderButton } from "./pruebas/TestProviderButton";

function App() {
    return (
        <div className="app">
            <UserContextProvider>
                <TestProviderButton />
            </UserContextProvider>
        </div>
    );
}

export default App;
