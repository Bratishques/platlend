import Footer from "./footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  

  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
