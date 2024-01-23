import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Login from "./pages/AuthenticationPage/Login/Login";
import Register from "./pages/AuthenticationPage/Register/Register";
import { useSelector } from "react-redux";
import { RootState } from "./types/AuthStaff";
import { useState } from "react";

function App() {
    return (
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
}

export default App;
