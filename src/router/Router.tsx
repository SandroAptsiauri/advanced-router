import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import Navbar from "../components/Navbar";
import { routes } from "./routes";
import MuiNavbar from "../components/MuiNavbar";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MuiNavbar routes={routes} />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
