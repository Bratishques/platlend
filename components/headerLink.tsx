import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import ScreenSizeContext from "../context/screenSizeContext";
import breakpoints from "../utils/breakpoints";
const HeaderLink = ({ dropdown = [], text, link }) => {
  const dropdownRef = useRef<HTMLDivElement | null>();
  const mainRef = useRef<HTMLDivElement | null>();
  const screenSize = useContext(ScreenSizeContext);
  const [isDropped, setIsDropped] = useState(false);
  useEffect(() => {
    if (isDropped && dropdownRef.current && screenSize < breakpoints.lg) {
      mainRef.current.style.marginBottom =
        dropdownRef.current.getBoundingClientRect().height + 10 + "px";
    } else {
      mainRef.current.style.marginBottom = "";
    }
  }, [isDropped, dropdownRef.current, screenSize]);
  return (
    <div
      ref={mainRef}
      onMouseMove={() => {
        if (screenSize > breakpoints.lg) {
          setIsDropped(true);
        }
      }}
      onMouseLeave={() => {
        if (screenSize > breakpoints.lg) {
          setIsDropped(false);
        }
      }}
      onClick={() => {
        if (screenSize < breakpoints.lg) {
          setIsDropped(true);
        }
      }}
      onTouchStart={() => {
        if (screenSize < breakpoints.lg) {
          setIsDropped(true);
        }
      }}
      className={`relative w-100 p-3 text-2xl text-white flex lg:h-full justify-center h-16 lg:mb-0`}
    >
      {!(dropdown.length > 0) ? (
        <a
          href={link}
          className={` whitespace-nowrap flex header-link relative  justify-self-center self-center `}
        >
          {text}
        </a>
      ) : (
        <p
          className={`whitespace-nowrap flex header-link relative  justify-self-center self-center `}
        >
          {text}
        </p>
      )}

      {dropdown.length && isDropped ? (
        <div
          ref={dropdownRef}
          onMouseLeave={() => {
            setIsDropped(false);
          }}
          className={` absolute lg:p-6 lg:px-24 bg-dropdown px-24 mt-16 flex flex-col align-center z-30`}
        >
          {dropdown.map((a) => {
            return <HeaderLink text={a.text} link={a.link} key={`${a.text}`} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

HeaderLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  dropdown: PropTypes.array,
};

export default HeaderLink;
