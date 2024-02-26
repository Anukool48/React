
import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
      //  console.log("Uppercase was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","Success");
    }
    const handleLoClick=()=>{
        let newText=text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","Success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","Success");
    }

    const handleExtraSpace=()=>{
         let newText=text.split(/[ ]+/);
         setText(newText.join(" "))
         props.showAlert("Extra space removed","Success");
    }
    const handleCleark=()=>{
        setText(' ');
        props.showAlert("Cleared text","Success");
    }
    const handleOnChanage =(event)=>{
      //  console.log("on change");
        setText(event.target.value);
    }

    
    const [text,setText]=useState('Enter text here');
  return (
<>
   <div>
<div className="mb-3" style={{color: props.mode==='dark'?'white':'rgb(0,2,4)'}}>
   <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChanage} style={{backgroundColor: props.mode==='dark'?'lightblue':'white',color: props.mode==='dark'?'white':'rgb(0,2,4)' }} id="myBox" rows="8"></textarea>
</div>
  <button type="button" class="btn btn-primary mx-1" onClick={handleUpClick} disabled={text.length===0}>Convert to uppercase </button>
  <button type="button" class="btn btn-primary mx-1" onClick={handleLoClick} disabled={text.length===0}>Convert to lowercase</button>
  <button type="button" class="btn btn-primary mx-1" onClick={handleCleark} disabled={text.length===0}>Clear text</button>
  <button type="button" class="btn btn-primary mx-1" onClick={handleCopy} disabled={text.length===0}>Copy to clipboard</button>
  <button type="button" class="btn btn-primary mx-1"onClick={handleExtraSpace} disabled={text.length===0}>Remove Extra space</button>

  </div>  
  
  <div className="conatiner my-3" style={{color: props.mode==='dark'?'white':'rgb(0,2,4)'}}>
     <h1>Your text summary</h1>
     <p>{text.split(/\+s/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
     <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} minutes read</p>
     <p>Previews</p>
     <p>{text.length>0?text:"Enter something above in the text box to preview it here"}</p>
  </div>

  </>
  )
}
