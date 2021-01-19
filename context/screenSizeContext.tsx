import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ScreenSizeContext = React.createContext(1400);

const ScreenSizeProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(1400);
  const resizeListener = useCallback(() => {
    console.log(window.innerWidth);
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenWidth}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

ScreenSizeProvider.propTypes = {
  children: PropTypes.node,
};

export default ScreenSizeContext;
export { ScreenSizeProvider };
