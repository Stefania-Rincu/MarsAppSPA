import {useContext} from "react";
import {MyContext} from "../context.tsx";

export function CounterWIthContext() {
    const { clickCount } = useContext(MyContext);

    return (
        <div>
            <p>Click count: {clickCount}</p>
        </div>
    );
}