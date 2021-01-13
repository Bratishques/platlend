import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import ScreenSizeContext from "../context/screenSizeContext";
import breakpoints from "../utils/breakpoints";
const HeaderLink = ({ dropdown = [], text, link }) => {
  const dropdownRef = useRef<HTMLDivElement | null>()
  const mainRef = useRef<HTMLDivElement | null>()
  const screenSize = useContext(ScreenSizeContext)
  const [isDropped, setIsDropped] = useState(false);
  useEffect(() => {
    console.log(isDropped)
    if (isDropped && dropdownRef.current && screenSize < breakpoints.lg) {
      console.log(dropdownRef.current)
      mainRef.current.style.marginBottom = dropdownRef.current.getBoundingClientRect().height + 10 + "px"
    }
    else {
      mainRef.current.style.marginBottom = "0px"
    }
  }, [isDropped, dropdownRef.current, screenSize])
  return (
    <div
      ref= {mainRef}
      onMouseMove={() => {
        if (screenSize > breakpoints.lg) {
          setIsDropped(true)
        }
      }}
      onMouseLeave={() => {
        if (screenSize > breakpoints.lg) {
          setIsDropped(false)
        }
      }}
      onTouchStart = {() => {
        if (screenSize < breakpoints.lg) {
          setIsDropped(true)
        }
      }}
      className={`relative p-3 text-2xl text-white flex h-full justify-center`}>
      {!(dropdown.length > 0) ?
        <a href={link} className={`flex header-link relative  justify-self-center self-center justify-center`}>
          {text}
        </a> :
        <p className={`flex header-link relative  justify-self-center self-center justify-center`}>
          {text}
        </p>
      }

      {dropdown.length && isDropped ?
        <div
          ref = {dropdownRef}
          onMouseLeave={() => {
            setIsDropped(false)
          }}
          className={` absolute p-3 bg-glowy-blue px-24 mt-16  align-center z-30`}>
          {dropdown.map((a, i) => {
            return <HeaderLink text={a.text} link={a.link} />
          })}
        </div> : null
      }
    </div>
  );
};

HeaderLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default HeaderLink;
