import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count+1)} style={{marginRight: "5px"}}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Counter;