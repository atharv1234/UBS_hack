import "./App.css";
import VirtualCardRegistration from "./components/VirtualCardRegistration/VCReg";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import AfterRegistration from "./components/after_registration/AfterRegistration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterCardBank from "./components/registerCardBank/RegisterCardBank";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Login />} />
          <Route path="/vcregistration" element={<VirtualCardRegistration />} />
          <Route path="/registerCard" element={<RegisterCardBank />} />
          <Route path="/after_register" element={<AfterRegistration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
