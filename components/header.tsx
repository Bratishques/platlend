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
    <div id="header-wrap" className={`w-full absolute flex justify-end`}>
      <div
        id="header"
        className={`w-full top-0 ${
          scrollState === 2
            ? "bg-primary-bg border-b-2 border-glowy-blue shadow-blue-glow"
            : "bg-transparent"
        } h-7.5 flex justify-center transition-opacity duration-300 ${
          scrollState === 2 ? "fixed" : "relative"
        } ${scrollState === 1 && "opacity-0"} z-50`}
      >
        <div
          style={{
            left: screenSize < breakpoints.lg && sidebarOpen ? "0%" : "-100%",
          }}
          className={`fixed bg-purple-500 h-screen w-full transition-all duration-500 z-20`}
        >
          <HeaderLink text={"Q Defi Rating"} link={""} />
          <HeaderLink text={"NFT"} link={""} />
          <HeaderLink text={"Careers"} link={""} />
          <HeaderLink text={"About us"} link={""} />
          <HeaderLink text={"Our other services"} link={""} />
          <HeaderLink text={"Blog"} link={""} />
          <HeaderLink text={"Link"} link={""} />
          <HeaderLink text={"Konstantin Konstantinopolsky"} link={""} />
        </div>
        <div className={`w-85 h-full flex justify-between`}>
          <div className={` flex items-center`}>
            <div>
              <img src={`/images/logoPlatinum.svg`}></img>
            </div>
          </div>
          {screenSize >= breakpoints.lg && (
            <div
              className={`max-w-96 w-4/5 h-full flex items-center justify-between py-3`}
            >
              <HeaderLink text={"Q Defi Rating"} link={""} />
              <HeaderLink text={"NFT"} link={""} />
              <HeaderLink text={"Careers"} link={""} />
              <HeaderLink text={"About us"} link={""} />
              <HeaderLink text={"Our other services"} link={""} />
              <HeaderLink text={"Blog"} link={""} />
              <HeaderLink text={"Link"} link={""} />
              <HeaderLink text={"en"} link={"/en"} />
              <HeaderLink text={"ja"} link={"/ja"} />
            </div>
          )}
        </div>
        {screenSize < breakpoints.lg ? (
          <button
            className={`relative focus:outline-none bg-green-300 rounded-full z-30 right-3 h-16 w-16 transition-all duration-300 self-center flex justify-center items-center p-2`}
            onClick={() => {
              sidebarData.setSidebarOpen();
            }}
          >
            <svg viewBox="0 0 100 70" width="20" height="20">
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
