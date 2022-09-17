import React, {useState} from 'react'

export default function TextForm(props) {

    const transformup = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", 'success')
    }
  
    const transformlow = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", 'success')
    }

    const clearText = () => {
        let newText = ""
        setText(newText)
    }

    const onChangeHandler = (event) => {
        setText(event.target.value)
    }
    const cutSpace =()=>{
        let space = text.split(/[ ]+/);
        setText(space.join(" "))
        props.showAlert("Extra Speces Removed", 'success')
    }

    const copyText =()=>{
        let copy = document.querySelector('#my-text')
        copy.select()
        navigator.clipboard.writeText(copy.value)
        props.showAlert("Copied to Clipboard", 'success')
        document.getSelection().removeAllRanges()
    }

    const [text, setText] = useState("");

    return ( 
        <>
    
    <div className="container">
        <div className="mb-3">
            <h1 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
            <textarea className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`} placeholder="Enter Some Text" value={text} onChange={onChangeHandler} id="my-text" rows="8"></textarea>
            <button disabled={text.length===0} className={`btn btn-${props.btnmode} mx-1 my-2`} onClick={transformup}>Convert to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnmode} mx-1 my-2`} onClick={transformlow}>Convert to Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnmode} mx-1 my-2`} onClick={clearText}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnmode} mx-1 my-2`} onClick={cutSpace}>Remove Extra Space</button>
            <button disabled={text.length===0} className={`btn btn-${props.btnmode} mx-1 my-2`} onClick={copyText}>Copy Text</button>
        </div>
    </div>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Your Text Summary</h1>
        <p><span className="style">{text.split(" ").filter((el)=>{return el.length!==0}).length}</span> Words and <span className="style">{text.length}</span> Characters</p>
        <p><span className="style">{0.008 * text.split(" ").filter((el)=>{return el.length!==0}).length}</span> Minutes to Read</p>
    </div>

    </>
  )
}
