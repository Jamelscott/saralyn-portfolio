"use client"
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div id="main-container" className="main-container">
      <NavBar></NavBar>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </div>
  );
}
