import React, { useRef } from "react";

const Uncontrolled = () => {
    const luckyname = useRef(null);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(luckyname.current.value);
    }
    return (
        <>
            <form action="" onSubmit={formSubmit}> 
                <div>
                    <label htmlFor="name">Enter some thing</label>
                    <input type="text" id="name" ref={luckyname}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Uncontrolled;