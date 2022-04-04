import "./navbar.css";
const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">ByBook</div>

      <div className="search-container">
        <form action="">
          <input id="search" type="search" placeholder="Search" />
          <label htmlFor="search" className="bx bx-search-alt-2"></label>
        </form>
      </div>

      <div className="action-icon">
        <ul className="dropdown">
          <li className="btn">
            <a className="link" href="#">
              Account
            </a>
            <div className="dropdown-menu">
              <ul>
                <li>
                  <a href="#">
                    <i className="bx bxs-user-circle"></i>My Profile
                  </a>
                </li>
                <hr />
                <li>
                  <a href="#">
                    <i className="bx bx-shopping-bag"></i>Orders
                  </a>
                </li>
                <hr />
                <li>
                  <a href="#">
                    <i className="bx bx-power-off"></i>Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <a href="#" className="icon">
          <i className="bx bx-heart"></i>
          <span>0</span>
        </a>

        <a href="#" className="icon">
          <i className="bx bx-cart"></i>
          <span>0</span>
        </a>
      </div>
    </header>
  );
};

export { Navbar };
