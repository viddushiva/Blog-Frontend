import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Background.css"
const Header = () => {
  return (
    <div>
      <div className="ht1">
        <div className="ht11">The</div>
        <span className="ht12">Siren</span>
      </div>
      <div className="flex1">
          <div><NavLink to="/home" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> Home </NavLink></div>    
          <div><NavLink to="/movies" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> Movies </NavLink></div>
          <div><NavLink to="/business" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> Business </NavLink></div>    
          <div><NavLink to="/sports" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> Sports </NavLink></div>
          <div><NavLink to="/politics" style={({ isActive }) => { return {color: isActive ? "red" : "Black",textDecoration: "none",} }}> Politics </NavLink></div>    
      
      </div>
      <hr />
    </div>
  );
};

export default Header;
