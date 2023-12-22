import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#34495E ";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router basename="/React-TextUtils">
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"
              element = {<About mode={mode} />}>
            </Route>
            <Route exact path="/"
              element = {<TextForm
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
                showAlert={showAlert}
              />}>
            </Route>
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
