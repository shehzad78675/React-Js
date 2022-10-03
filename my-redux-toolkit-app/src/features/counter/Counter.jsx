import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => {dispatch(increment())}} style={{marginRight: "5px"}}>Increment</button>
            <button onClick={() => {dispatch(decrement())}} style={{marginRight: "5px"}}>Decrement</button>
            <button onClick={() => {dispatch(incrementByAmount(10))}} style={{marginRight: "5px"}}>Increment by 10</button>
        </div>
    )
}

export default Counter;