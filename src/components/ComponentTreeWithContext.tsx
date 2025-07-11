import {MessageWithContext} from "./MessageWithContext.tsx";
import {IncrementCountWithContext} from "./IncrementCountWIthContext.tsx";

export function ComponentTreeWithContext() {
    return (
        <div className="component-tree">
            <IncrementCountWithContext />
            <MessageWithContext />
        </div>
    );
}