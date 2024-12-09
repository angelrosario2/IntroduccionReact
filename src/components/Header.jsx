const Header = ({ onNavigate, cartTotal }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1>Pizzería Mamma Mia!</h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li onClick={() => onNavigate("home")}>
              <a href="#">🏠 Home</a>
            </li>
            <li onClick={() => onNavigate("login")}>
              <a href="#">🔑 Login</a>
            </li>
            <li onClick={() => onNavigate("register")}>
              <a href="#">📝 Register</a>
            </li>
          </ul>
        </nav>
        <div className="header-cart">
          🛒 Total: <span>${cartTotal.toFixed(2)}</span>
        </div>
      </div>
    </header>
  );
};
