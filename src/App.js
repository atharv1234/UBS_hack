import "./App.css";
import VirtualCardRegistration from "./components/VirtualCardRegistration/VCReg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterCardBank from "./components/registerCardBank/RegisterCardBank";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Home from "./components/home/Home";

function App() {
  let login = true;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/home" element={<Home login={login} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/vcregistration" element={<VirtualCardRegistration />} />
          <Route path="/registerCard" element={<RegisterCardBank />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
