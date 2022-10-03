import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    let btnDisabled = text.split(" ").filter(element => element.length !== 0).length === 0;

    const handleUpClick = ()=>{
        // console.log('uppercase clicked')
        setText(text.toUpperCase());
    }

    const handleOnChange = (event)=>{
        // console.log('onchange clicked')
        setText(event.target.value);
    }

    const handleLoClick = () =>{
        setText(text.toLowerCase());
    }

    const handleCapitalize = () => {
        let newText = [];
        text.split(" ").forEach((item, index) => {
            if(item.includes('\n')){
                let innerArr = [];
                item.split('\n').forEach((innerItem, innerIndex) => {
                    if(innerItem === ""){
                        innerArr[innerIndex] = '';
                    }else{
                        innerArr[innerIndex] = innerItem[0].toUpperCase() + innerItem.slice(1).toLowerCase();
                    }
                });
                // console.log(innerArr.join('\n'));
                newText[index] = innerArr.join('\n');
            }else{
                newText[index] = item[0].toUpperCase() + item.slice(1).toLowerCase();
            }
            // console.log(item);
        })
        // console.log(newText);
        setText(newText.join(' '));
    }

    const handleClear = () => {
        setText('');
    }

    const handleCopyText  = () => {
        navigator.clipboard.writeText(text);
    }

    const handleRemoveSpaces = () => {
        setText( text.split(' ').filter(element => element.length !== 0).join(' '));
    }
  return (
      <>
      <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
            <textarea className="form-control" id="textArea" rows="10" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode === 'dark'? '#13466e':'white', color: props.mode === 'dark'? 'white':'black'}}></textarea>
        </div>
        <button disabled={btnDisabled} type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={btnDisabled} type="button" className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={btnDisabled} type="button" className="btn btn-primary mx-2 my-2" onClick={handleCapitalize}>Text Capitalize</button>
        <button disabled={btnDisabled} type="button" className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
        <button disabled={btnDisabled} type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
        <button disabled={btnDisabled} type="button" className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p>Number of words {text.split(" ").filter(element => element.length !== 0).length} Number of characters {text.split(' ').filter(element => element.length !== 0).join().length}</p>
        <p>{0.008 * text.split(" ").filter(element => element.length !== 0).length} minutes to read this text</p>
        <h2>Preview</h2>
        <p>{text.length <= 0? 'Please enter something above given text area!':text}</p>
    </div>
    </>
  )
}
