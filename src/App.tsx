import { UserContextProvider } from "./pruebas/provider1";
import { TestProviderButton } from "./pruebas/TestProviderButton";
import { UserItem } from "./pruebas/user.item";

function App() {
    return (
        <div className="app">
            <UserContextProvider>
                <>
                    HOLAA
                    <TestProviderButton />
                    HELLO
                    <UserItem item={{ id: 5, name: "Manolo" }} />
                </>
            </UserContextProvider>
        </div>
    );
}

export default App;
