import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Home Page
      </NavLink>
      <NavLink
        to="/about"
        activeStyle={{
          fontWeight: "bold",
          color: "green",
        }}
      >
        About Page
      </NavLink>
      <NavLink
        to="/discover"
        activeStyle={{
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Discover Movie Page
      </NavLink>
    </div>
  );
}
