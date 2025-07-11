import {CounterWIthContext} from "./CounterWIthContext.tsx";

export function MessageWithContext() {
    return (
        <div>
            <CounterWIthContext />
            <p>Message</p>
        </div>
    );
}
