import React, {useState} from "react";

export default function Textbox(props) {
  const [text, setText] = useState("Enter text  here");
  const handleUpClick= () => {
    //  console.log("handleUpClick Called");
     let newText=text.toUpperCase();
     setText(newText);
  }
  const handleLowerClick= () => {
    //  console.log("handleUpClick Called");
     let newText=text.toLowerCase();
     setText(newText);
  }
  const handleClear= () => {
    //  console.log("handleUpClick Called");
     setText("");
  }
  
  const copyToClipboard = () =>
  {
    navigator.clipboard.writeText(text);
  }

  const handleOnChange= (event) => {
    // console.log("handleOnChange Called");
    setText(event.target.value);
 }
  return (
    <>

      <div className="container">
        {/* <label htmlFor="exampleFormControlInput1" class="form-label">
          TextArea
        </label> */}
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="textbox" value={text} onChange={handleOnChange} rows="3"></textarea>
      </div>
      <div className="container my-4">
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={copyToClipboard}>copy to click board</button>
      </div>
      <div className="container my-4">
        <h1>Text Summary:</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Read Time for all the words is: {0.008 * text.split(" ").length} minutes</p>
      </div>
      <div className="container my-4">
        <h1>Preview:</h1>
        <p>{text}</p>
    


      </div>
    </>
  );
}