import "./App.css";
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterCardBank from './components/registerCardBank/RegisterCardBank'
function App() {

  return <div>
    <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Login />} />
          <Route path="/registerCard" element={<RegisterCardBank/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
