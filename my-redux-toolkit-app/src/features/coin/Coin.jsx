import { useSelector } from "react-redux";
// import { incrementByAmount } from "../counter/counterSlice";

const Coin = () => {
    const count = useSelector((state) => state.counter.count);
    // const dispatch = useDispatch();
    return (
        <div style={{marginTop: "10px"}}>
            <span>{count}</span>
        </div>
    )
}

export default Coin;