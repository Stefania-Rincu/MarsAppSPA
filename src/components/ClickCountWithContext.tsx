import {useEffect, useState} from "react";
import { MyContext } from "../context";

export function ClickCountWithContext({ children }: { children: React.ReactNode }) {
    const [clickCount, setClickCount] = useState(() => {
        const stored = localStorage.getItem("clickCount");
        return stored !== null ? parseInt(stored) : 0;
    });

    useEffect(() => {
        localStorage.setItem("clickCount", clickCount.toString());
    }, [clickCount]);

    function increment() {
        setClickCount(prev => prev + 1);
    }

    return (
        <MyContext.Provider value={{ clickCount, increment }}>
            {children}
        </MyContext.Provider>
    );
}