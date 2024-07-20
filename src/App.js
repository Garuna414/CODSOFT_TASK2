import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Jobs from "./components/Jobs";
import ItemForm from "./components/ItemForm";
import Dashboard from "./components/Dashboard";
import Apply from "./components/Apply";
import UpdateInfo from "./components/UpdateInfo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="h-12 sticky top-0 left-0 z-10">
        <Navbar />
      </div>
      <div className="h-[calc(100vh_-_48px)]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/itemForm" element={<ItemForm />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/apply" element={<Apply />} />
          <Route exact path="/update" element={<UpdateInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
