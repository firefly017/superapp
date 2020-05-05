import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
      <Link to="/discover">Discover Movie Page</Link>
    </div>
  );
}
