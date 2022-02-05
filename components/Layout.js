import Navigation from "./Nav.js";
import Nav from "./Nav.js";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="Container">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
