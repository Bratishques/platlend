import { useCallback, useContext, useEffect, useState } from "react";
import ScreenSizeContext from "../context/screenSizeContext";
import SidebarContext from "../context/sidebarContext";
import useTranslation from "../hooks/useTranslation";
import { languageNames, locales } from "../translations/config";
import breakpoints from "../utils/breakpoints";
import HeaderLink from "./headerLink";

const Header = ({ ctx }) => {
  const [scrollState, setScrollState] = useState(0);
  const sidebarData = useContext(SidebarContext);
  const sidebarOpen = sidebarData.sidebarOpen;
  const screenSize = useContext(ScreenSizeContext);
  const { t, locale } = useTranslation(ctx);
  const services = t("services");

  const scrollListener = useCallback(() => {
    const position = window.scrollY;
    const header = document.getElementById("header");
    const headerHeight = header.getBoundingClientRect().height;
    if (position <= headerHeight) {
      setScrollState(0);
    } else if (position > headerHeight && position < 150) {
      setScrollState(1);
    } else {
      setScrollState(2);
    }
  }, []);

  const links = [
    <HeaderLink key={"Q Defi Rating"} text={"Q Defi Rating"} link={""}/>,
    <HeaderLink text={"NFT"} link={""} />,
    <HeaderLink text={"Careers"} link={""} />,
    <HeaderLink text={"About us"} link={""} />,
    <HeaderLink text={"Our other services"} link={""} dropdown={services} />,
    <HeaderLink text={"Blog"} link={""} />,
    <HeaderLink text={"Contact us"} link={""} />,
    <HeaderLink
      text={`${languageNames[locale]}`}
      link={"/en"}
      dropdown={locales.map((a) => {
        return {
          text: languageNames[a],
          link: `/${a}`,
        };
      })}
    />,
  ];

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
        } h-7.5r flex justify-center transition-opacity duration-300 ${
          scrollState === 2 ? "fixed" : "relative"
        } ${scrollState === 1 && "opacity-0"} z-40`}
      >
        <div
          style={{
            left: screenSize < breakpoints.lg && sidebarOpen ? "0%" : "-100%",
          }}
          className={`fixed flex flex-col bg-primary-bg h-screen w-full transition-all duration-500 z-20 flex flex-col justify-center align-center overflow-y-scroll`}
        >
          {links.map((a) => {
            return a;
          })}
        </div>
        <div className={`w-85 h-full flex justify-between`}>
          <div className={` flex items-center`}>
            <div>
              <img src={`/images/logoPlatinum.svg`}></img>
            </div>
          </div>
          {screenSize >= breakpoints.lg && (
            <div className={`max-w-96 w-4/5 h-full `}>
              <div
                className={`relative w-full flex items-center justify-between py-3 h-full`}
              >
                {links.map((a) => {
                  return a;
                })}
              </div>
            </div>
          )}
        </div>
        {screenSize < breakpoints.lg ? (
          <button
            className={`relative focus:outline-none rounded-full z-30 right-3 h-16 w-16 transition-all duration-300 self-center flex justify-center items-center p-2`}
            onClick={() => {
              sidebarData.setSidebarOpen();
            }}
          >
            <div
              className={`rounded-full ${sidebarOpen ? "bg-gray-400" : ""} p-4`}
            >
              <svg viewBox="0 0 100 70" width="20" height="20">
                <rect
                  width="100"
                  height="15"
                  fill={`${sidebarOpen ? "black" : "white"}`}
                ></rect>
                <rect
                  y="30"
                  width="100"
                  height="15"
                  fill={`${sidebarOpen ? "black" : "white"}`}
                ></rect>
                <rect
                  y="60"
                  width="100"
                  height="15"
                  fill={`${sidebarOpen ? "black" : "white"}`}
                ></rect>
              </svg>
            </div>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
