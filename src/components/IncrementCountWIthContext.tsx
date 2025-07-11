import {useContext} from "react";
import {MyContext} from "../context.tsx";

export function IncrementCountWithContext() {
    const { increment } = useContext(MyContext);

    return (
        <button onClick={increment}>
            Click to increase counter
        </button>
    );
}