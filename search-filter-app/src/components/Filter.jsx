import { useState } from 'react';
import JSONDATA from '../MOCK_DATA.json';
const Filter = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} name="" id="" placeholder="Search..."/>
            {JSONDATA.filter((val) => {
                if(inputValue === ""){
                    return val;
                }
                if(val.first_name.toLowerCase().includes(inputValue.toLowerCase())){
                    return val;
                }
            }).map((val, key) => {
                return <div key={key}>{val.first_name}</div>
            })} 
        </div>
    )
}

export default Filter;