import { useState } from "react";
import { useDispatch } from "react-redux"
import { changeTextColor } from "./themeSlice";

const Theme = () => {
    // const color = useSelector((state) => state.theme.color);
    const dispatch = useDispatch();
    const [inputColor, setInputColor] = useState()
    return (
        <div>
            <input type="text" style={{marginTop: "10px"}} onChange={(e) => setInputColor(e.target.value)}/>
            <button onClick={() => dispatch(changeTextColor(inputColor))}>Change text color</button>
        </div>
    )
}

export default Theme;