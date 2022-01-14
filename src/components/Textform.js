import React, {useState} from 'react';



export default function Textform(props) {
    const handleUpClick= (event)=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handledownClick= (event)=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")

    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleclearClick = (event)=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success")

    }
    const handleCopy =()=>{
        var text  = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success")

    } 
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success")

    }
    const calcWordCount=(text)=>{
        if(text.length===0)
            return 0;
        else
        {
            text = text.split(/[ ]+/);
            console.log(text);
            let count = 0;
            for(let i=0;i<text.length;i++){
                if(text[i]!=="")
                    count+=1;
            }
            return count;
            
        }
    }
    const [text, setText] = useState("");
    return (
        <>
        <div  style = {{color: props.mode==="dark"?"white":"black"}} className='container'>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea className="form-control" id="myBox" style = {{color: props.mode==="dark"?"white":"black", backgroundColor: props.mode==="dark"?"grey":"white"}}rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handledownClick}>Convert to Lowercase</button>
                <button className='btn btn-primary my-1' onClick={handleclearClick}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
        </div>
        <div className='container my-3' style = {{color: props.mode==="dark"?"white":"black"}}>
            <h2 >Your text summary</h2>
            <p >{calcWordCount(text)} words and {text.length} characters</p>
            <p >{0.008 * text.split(" ").length} Minutes read</p>
            <h2 >Preview</h2>
            <p c>{text}</p>
        </div>
        </>
    )
}
