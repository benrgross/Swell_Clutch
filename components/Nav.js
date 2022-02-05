import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

function Nav() {
  const { user } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        style={{ color: "blue" }}
        className="navbar-brand nav-start
    "
      >
        <Link className="navbar-brand" href="/">
          Swell Clutch
        </Link>
      </a>
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
        {user ? (
          <>
            <li className="nav-item nav-link active nav__item-link nav__item-link-first">
              <Link className="nav-link active" aria-current="page" href="/">
                Dashboard
              </Link>
              <li className="nav-item nav-link active nav__item-link">
                <Link className="nav-link" href="/api/auth/logout">
                  logout
                </Link>
              </li>
            </li>
          </>
        ) : (
          <ul className="navbar-nav ml-auto nav-sign-in-out">
            <li className="nav-item  ">
              <Link href="/api/auth/login">
                <a className="nav-link active">Sign In</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Nav;
