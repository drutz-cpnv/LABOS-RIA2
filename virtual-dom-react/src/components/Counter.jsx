import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <h2>Counter: {count}</h2>
            //TODO
        </div>
    );
}

export default Counter;
