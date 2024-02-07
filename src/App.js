import Navbar from "./components/Navbar";
import "./App.css";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, changemode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 15000);
  };

  const toggle = () => {
    if (mode === "light") {
      changemode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      changemode("light");
      document.body.style.backgroundColor = "#e2e3e5";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>

     
        <Navbar title="TextUtils" mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>  
            <Route exact path="/About" element={<About />}>
              
            </Route>
            
              <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Your Text To Analyze" mode={mode}/>}>
              
            </Route>

          </Routes>

          {/* <Textform showAlert={showAlert} heading="Enter Your Text To Analyze" mode={mode}/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
