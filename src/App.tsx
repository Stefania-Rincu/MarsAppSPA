import './App.css'
import {NasaInfo} from "./components/NasaInfo.tsx";
import {ClickCountWithContext} from "./components/ClickCountWithContext.tsx";
import {ComponentTreeWithContext} from "./components/ComponentTreeWithContext.tsx";

function App() {
    return (
        <ClickCountWithContext>
            <NasaInfo />
            <ComponentTreeWithContext />
        </ClickCountWithContext>
    );
}

export default App
