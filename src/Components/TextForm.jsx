import React,{useState} from 'react'
 
export default function TextForm(props) {
    const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    }
    const handleloClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        }
    const handleClearClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText ='';
    setText(newText)
    }
    
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(""))
    }
        

    const handleOnChange = (event)=>{
    setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text"; Wrong way to change the state
    // setText = "new text"; Correct way to change the state


return (
<>
    <div className='container'style={{color:props.mode==='dark'?'white':'#3489b4'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">

    <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
color:props.mode==='dark'?'white':'#3489b4'}}id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowerercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
        <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>

    </>
   )
 }
 