import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/about">About Page</NavLink>
      <NavLink to="/discover">Discover Movie Page</NavLink>
    </div>
  );
}
