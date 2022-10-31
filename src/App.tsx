import { UserContextProvider } from "./pruebas/provider1";
import { TestProviderButton } from "./pruebas/TestProviderButton";
import { UserItem } from "./pruebas/user.item";

function App() {
    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 1000000);
    };

    return (
        <div className="app">
            HELLO
            <UserContextProvider>
                <>
                    HOLAA
                    <TestProviderButton />
                    HELLO
                    <UserItem
                        item={{
                            id: generateRandomNumber(),
                            name: "Manolo",
                        }}
                    />
                </>
            </UserContextProvider>
        </div>
    );
}

export default App;
