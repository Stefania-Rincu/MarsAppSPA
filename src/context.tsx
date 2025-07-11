import {createContext} from "react";

export const MyContext = createContext({
    clickCount: 0,
    increment: () => {}
});