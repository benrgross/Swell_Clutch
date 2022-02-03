import Link from "next/link";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid navbar-brand nav-icon">
        <Link className="navbar-brand hello" href="/">
          Swell Clutch
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item nav-link active nav__item-link nav__item-link-first">
              <Link className="nav-link active" aria-current="page" href="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item nav-link active nav__item-link">
              <Link className="nav-link" href="/api/auth/login">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
