import Nav from "./Nav.js";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="Container">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
