import Navbar from "./components/Navbar";
import "./App.css";
import Textform from "./components/Textform";
// import { useState } from "react";
// import About from './components/About';
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  
  const [mode, changemode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 15000)
  }
 
  const toggle = () => {
    if (mode ==='light'){
      changemode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
      
    }else {
      changemode('light');
      document.body.style.backgroundColor='#e2e3e5';
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  };
  

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggle} />
      <Alert alert={alert}/>
      <div className="container">
        {/* <About/> */}
        <Textform showAlert={showAlert} heading="Enter Your Text To Analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
