import { memo } from "react";

const Navbar = memo(({ total }) => {
  console.log("navbar");
  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{total}</span>
    </nav>
  );
});

export default Navbar;
