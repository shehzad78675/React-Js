import { useReducer } from "react"

const initialState = 0;

const reducer = (state, action) => {
    if(action.type === 'INCREMENT'){
        return state + 1;
    }
    if(action.type === 'DECREMENT'){
        return state - 1;
    }
}

const UseReducer = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})} style={{marginRight: "3px"}}>Inc</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Dec</button>
        </div>
    )
}

export default UseReducer;