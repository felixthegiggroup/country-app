import React from "react";
import { Link } from "react-router-dom";
import Container from "../utils/Container";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-2 px-4 shadow-md">
      <Container>
        <div className="flex justify-between">
          <Link to="/">Where in the world?</Link>
          <h3>Dark</h3>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
