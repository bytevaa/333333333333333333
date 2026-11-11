import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sign from "./components/Sign/Autorization/Sign";
import SignUP from "./components/Sign/Registration/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Sign />} />
        <Route path="/registration" element={<SignUP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
