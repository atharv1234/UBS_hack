import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsRegistered from "./components/CardsRegistered/CardsRegistered";
import DebitCard from "./components/Temp/temp"; 
function App() {
  let login = true;
  return (
    <div style={{ maxWidth: "1024px", margin: "auto" }}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home login={login} />} />
          <Route path="/cards_registered" element={<CardsRegistered />}/>
          <Route path="/debit_card" element={<DebitCard/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
