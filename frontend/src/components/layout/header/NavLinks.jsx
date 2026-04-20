import React from "react";
import { Link, NavLink } from "react-router";

function NavLinks() {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "New", to: "/new" },
    { label: "Categories", to: "/categories" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <nav>
      <div className="container nav">
        {navLinks.map((link, i) => {
          return (
            <NavLink key={i} to={link.to}>
              {link.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default NavLinks;
