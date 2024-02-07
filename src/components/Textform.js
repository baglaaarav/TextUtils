import { useState } from "react"
import React  from 'react'



export default function Textform(prop) {
    const handleUpClick  = ()=>{
        console.log("upperCase")
        prop.showAlert("UpperCase Text", "success")
        let te = text.toUpperCase();

        setText(te)
    }
    const handledownClick = () => {
      prop.showAlert("LowerCase Text", "success")
      let te =  text.toLowerCase();
      setText(te);
    }
    const handleOnchange  = (event)=>{
        console.log("handleOnchange")
        
        setText(event.target.value)
    }
    const cleartext = ()=>{
      prop.showAlert("clear Text", "success")
      setText("")
    }
    const alternateCase = (inputText) =>{
      let result = "";
      for (let i = 0; i < inputText.length; i++) {
        if (i % 2 === 0) {
          result += inputText[i].toUpperCase();
        } else {
          result += inputText[i].toLowerCase();
        }
      }
      return result;
    }
    const alternative = ()=> {
      prop.showAlert("Alternative Text", "success")
      setText(alternateCase(text))
    }
    const capti = (text) => {
      let result =""
      for(let i = 0; i < text.length;i++){
        if(i === 0 || text[i-1] === " "){
          result+= text[i].toUpperCase();
        }
        else{
          result+= text[i].toLowerCase();
        }
      }
      //result[0] = text[0].toUpperCase();
      return result;
    }

    const captiallize = ()=>{
      prop.showAlert("captiallize Text", "success")
      setText(capti(text))
    }

    const copy = () => {
      prop.showAlert("copy Text", "success")
      navigator.clipboard.writeText(text)
    }
    const [text, setText] = useState("")
  return (
    <>
    
      <div className="container" >
          <div className="mb-3">
          <label htmlFor="Mybox" className="form-label" style={{color : prop.mode === 'light'? 'black':'white'}}><h1>{prop.heading} </h1></label>
          <textarea className="form-control" style={{backgroundColor : prop.mode === 'dark'? 'black':'white', color:prop.mode === 'dark'? 'white':"black"}} id="Mybox" onChange={handleOnchange} value={text} rows="14"></textarea>
          </div>

          <button className="btn btn-primary mx-2"   onClick={handleUpClick}>Convert to upper</button>

          <button className="btn btn-primary mx-2"  onClick={handledownClick}>Convert to lowerr</button>
          
          <button className="btn btn-primary mx-2 my-2 "   onClick={alternative}>Alternative text</button>
          <button className="btn btn-primary mx-2 my-2"  onClick={captiallize}>captiallize text</button>
          <button className="btn btn-primary mx-2 my-2"  onClick={copy}>Copy text</button>
          <button className="btn btn-primary mx-2 my-2"  onClick={cleartext}>Clear Text</button>
      </div>
      
      <div className="container my-2" style={{color : prop.mode === 'light'? 'black':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length-1} words, {text.length} characters</p>
        <p> Time to read the text is {text.split(" ").length*0.008 - 0.008} minutes </p>
        <h2>Preview</h2>
        <p>{text === ""? "Enter your text": text}</p>


      </div>
    </>
  )
}

