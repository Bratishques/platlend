import React, { useState } from "react";
import PropTypes from "prop-types";

const SidebarContext = React.createContext({
  sidebarOpen: false,
  setSidebarOpen: () => {},
  modalOpen: false,
  setModalOpen: () => {}
});

const SidebarContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)
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
  const openModal = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <SidebarContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen: openSidebar,
        modalOpen,
        setModalOpen: openModal
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
