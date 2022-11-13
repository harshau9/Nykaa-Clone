import React from 'react'
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Login from './components/Authentication/Login'
import ManualRegistration from "./components/Authentication/ManualRegistration"

import HomePage from "./components/Home/HomePage";

function Main() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<ManualRegistration />} />
      </Routes>
    </div>
  );
}

export default Main