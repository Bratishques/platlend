import React, { useState } from "react";
import PropTypes from "prop-types";
const SidebarContext = React.createContext({
  sidebarOpen: false,
  setSidebarOpen: () => {},
});

const SidebarContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    const mainTag = document.querySelector("html");
    if (!sidebarOpen) {
      mainTag.style.height = "100vh";
      mainTag.style.overflow = "hidden";
    } else {
      mainTag.style.height = "";
      mainTag.style.overflow = "";
    }
  };
  return (
    <SidebarContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen: openSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarContextProvider.propTypes = {
  children: PropTypes.node,
};

export default SidebarContext;

export { SidebarContextProvider };
