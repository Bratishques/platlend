const Loader = ({ children }) => {
  return <div className={`absolute w-full h-screen z-50 flex items-center justify-center bg-primary-bg`}>{children}</div>;
};

export default Loader;
