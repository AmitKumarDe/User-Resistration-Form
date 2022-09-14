import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Welcome from "./Components/Welcome";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logIn" element={<LogIn />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
