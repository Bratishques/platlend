import PropTypes from "prop-types";

const Loader = ({ children }) => {
  return (
    <div
      className={`fixed w-full h-screen z-50 flex items-center justify-center bg-primary-bg `}
    >
      {children}
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
};

export default Loader;
