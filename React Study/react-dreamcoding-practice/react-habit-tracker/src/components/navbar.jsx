const Navbar = ({total}) => {
  return (
    <nav className='navbar'>
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className='navbar-count'>{total}</span>
    </nav>
  );

}

export default Navbar;