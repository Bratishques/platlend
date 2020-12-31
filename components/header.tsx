import { useCallback, useContext, useEffect, useState } from "react";
import ScreenSizeContext from "../context/screenSizeContext";
import SidebarContext from "../context/sidebarContext";
import breakpoints from "../utils/breakpoints";
import HeaderLink from "./headerLink";

const Header = () => {
  const [scrollState, setScrollState] = useState(0);
  const sidebarData = useContext(SidebarContext);
  const sidebarOpen = sidebarData.sidebarOpen;
  const screenSize = useContext(ScreenSizeContext);

  const scrollListener = useCallback(() => {
    const position = window.scrollY;
    const header = document.getElementById("header");
    const headerHeight = header.getBoundingClientRect().height;
    console.log(position);
    if (position <= headerHeight) {
      setScrollState(0);
    } else if (position > headerHeight && position < 150) {
      setScrollState(1);
    } else {
      setScrollState(2);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={`w-full h-12 flex justify-end`}>
      <div
        id="header"
        className={`w-full ${
          scrollState === 2 ? "bg-red-400" : "bg-transparent"
        } h-12 flex justify-center transition-all duration-300 ${
          scrollState === 2 ? "fixed" : "relative"
        } ${scrollState === 1 && "opacity-0"} z-10`}
      >
        <div
          style={{
            left: screenSize < breakpoints.md && sidebarOpen ? "0%" : "-100%",
          }}
          className={`fixed bg-purple-500 h-screen w-full transition-all duration-500 z-20`}
        ></div>
        <div className={`w-85 h-full flex space-between`}>
          <div className={`bg-green-300 h-full flex items-center`}>
            <div>LOGO</div>
          </div>
          {screenSize >= breakpoints.md && (
            <div className={`w-full h-full flex items-center justify-end py-3`}>
              <HeaderLink text={"Link"} link={""} />
              <HeaderLink text={"Konstantin Konstantinopolsky"} link={""} />
            </div>
          )}
        </div>
        {screenSize < breakpoints.md ? (
          <button
            className={`relative focus:outline-none bg-green-300 rounded-full z-30 right-3 h-8 w-8 transition-all duration-300 self-center flex justify-center items-center p-2`}
            onClick={() => {
              sidebarData.setSidebarOpen();
            }}
          >
            <svg viewBox="0 0 100 80" width="20" height="20">
              <rect width="100" height="15"></rect>
              <rect y="30" width="100" height="15"></rect>
              <rect y="60" width="100" height="15"></rect>
            </svg>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
