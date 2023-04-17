import { useEffect, useState } from "react";

const TemperatureControl = () => {
    const [temperature, setTemperature] = useState(10);
    const [color, setColor] = useState('cold');

    useEffect(()=>{
        if(temperature <= 15){
            setColor('cold');
        }else if(temperature > 15 && temperature <= 20){
            setColor('neutral')
        }else{
            setColor('hot');
        }
    },[temperature]);
    return (
        <div className="container">
            <div className={`temperature ${color}`}  ><div>{temperature} <sup>o</sup>C</div></div>
            <div className="inner-container">

            <button className="increment buttons" onClick={() => setTemperature(temperature + 1)}>+</button>
            <button className="decrement buttons" onClick={() => setTemperature(temperature - 1)}>-</button>
            </div>
        </div>
    );
}

export default TemperatureControl;