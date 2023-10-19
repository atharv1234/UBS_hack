import "./App.css";
import CardGenerator from "./components/CardGenerator/CardGenerator";
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return <div>
    <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Login />} />
        <Route path="/card-generator" element={<CardGenerator />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
