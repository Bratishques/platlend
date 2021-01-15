import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import ScreenSizeContext from "../context/screenSizeContext";
import breakpoints from "../utils/breakpoints";

const ArrowSlider = ({
  children,
  rowsFull,
  rowsMobile,
  itemsDesktop,
  itemsTablet = itemsDesktop,
  itemsMobile = itemsDesktop,
  buttons = true,
  circles = false,
  progressBar = true
}) => {
  const screenSize = useContext(ScreenSizeContext);
  const [itemsUsed, setItemsUsed] = useState(rowsFull);
  const [scrollState, setScrollState] = useState(1);
  const [isTouched, setIsTouched] = useState(false);
  const [xTouchStart, setXTouchStart] = useState(0);
  const [yTouchStart, setYTouchStart] = useState(0)
  const [itemsOnScreen, setItemsOnScreen] = useState(itemsDesktop)
  const [progress, setProgress] = useState(
    (scrollState / Math.ceil(children.length / itemsOnScreen)) * 100
  );
  let xTouchEnd = 0;
  let xMoved = 0;
  let yMoved = 0
  const gridCheck = Math.ceil(children.length / itemsOnScreen);
  const innerRef = useRef<HTMLDivElement | null>();

  const colsAmount = (items) => {
    return Math.ceil(children.length / items);
  };

  useEffect(() => {
    if (screenSize <= breakpoints.lg && screenSize > breakpoints.md) {
      setItemsOnScreen(itemsTablet)
    }
    else if (screenSize <= breakpoints.md) {
      setItemsOnScreen(itemsMobile)
    }
    else {
      setItemsOnScreen(itemsDesktop)
    }
  }, [screenSize])

  useEffect(() => {
    if (itemsUsed !== rowsFull && screenSize > breakpoints.md) {
      setItemsUsed(rowsFull);
    }
    if (itemsUsed !== rowsMobile && screenSize <= breakpoints.md) {
      setItemsUsed(rowsMobile);
    }
  }, [screenSize]);

  const slideLeftFunc = () => {
    if (scrollState > 1) {
      setScrollState(scrollState - 1);
    }
  };
  const slideRightFunc = () => {
    const gridCheck = Math.ceil(children.length / itemsOnScreen);
    if (scrollState < gridCheck) {
      setScrollState(scrollState + 1);
    }
  };

  const endTouch = () => {
    const gridCheck = Math.ceil(children.length / itemsOnScreen);
    console.log(xTouchStart, xTouchEnd);
    if (xTouchStart - xTouchEnd > screenSize / 10 && scrollState < gridCheck) {
      setScrollState(scrollState + 1);
    } else if (xTouchEnd - xTouchStart > screenSize / 10 && scrollState > 1) {
      setScrollState(scrollState - 1);
    }
    setXTouchStart(0);
    setYTouchStart(0);
    xTouchEnd = 0;
    xMoved = 0;
  };

  // remove transition for moving on touch/drag
  useEffect(() => {
    if (isTouched) {
      innerRef.current.style.transition = "none";
    } else {
      innerRef.current.style.transition = "";
    }
  }, [isTouched]);

  //set the offset to the scroll state level
  useEffect(() => {
    innerRef.current.style.transform = `translateX(${String((-scrollState+1) * (100*itemsOnScreen/children.length))}%)`;
  }, [scrollState, itemsUsed, xTouchStart, itemsOnScreen]);

  useEffect(() => {
    if (scrollState > gridCheck) {
      setScrollState(gridCheck)
    }
    setProgress((scrollState / gridCheck) * 100);
   
  }, [scrollState, itemsOnScreen]);

  useEffect(() => {
    innerRef.current.style.width =
      String((colsAmount(itemsUsed) * 100) / (itemsOnScreen / itemsUsed)) + "%";
  }, [itemsUsed, itemsOnScreen]);

  const circlesDivs = () => {
    const gridCheck = Math.ceil(children.length / itemsOnScreen)
    const circleArr = []
    for (let i = 1; i <= gridCheck; i++) {
      circleArr.push(
        <div
        onClick={() => {
          setScrollState(i)
        }}
        className={`w-8 h-8 bg-white transition-all rounded-full ${scrollState===i ? "opacity-100" : "opacity-50"}`}>

        </div>
      )
    }
    return (
      circleArr
    )
  }

  return (
    <div className={`h-6/12 w-full overflow-hidden`}>
      <div
        style={{
          gridTemplateColumns: `repeat(${colsAmount(
            itemsUsed
          )}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${itemsUsed}, minmax(0, 1fr))`,
        }}
        ref={innerRef}
        className={`grid grid-flow-col  relative transition-left duration-500`}
        onTouchStart={(e) => {
          setXTouchStart(e.touches[0].clientX);
          setYTouchStart(e.touches[0].clientY)
          setIsTouched(true);
        }}
        onTouchMove={(e) => {
          xMoved = e.touches[0].clientX - xTouchStart;
          yMoved = e.touches[0].clientY - yTouchStart
          const gridCheck = Math.ceil(children.length / itemsOnScreen);
          const currentLeft = -100 * (scrollState - 1);
          if (yMoved > 10 || yMoved < -10) {
            console.log(yMoved)
            return
          }
          if (scrollState < gridCheck && xMoved < 0) {
            innerRef.current.style.left =
              String(Number(currentLeft) + Number(xMoved / 2)) + "%";
          }
          if (scrollState > 1 && xMoved > 0) {
            innerRef.current.style.left =
              String(Number(currentLeft) + Number(xMoved / 2)) + "%";
          }
        }}
        onTouchEnd={(e) => {
          xTouchEnd = e.changedTouches[0].clientX;
          setIsTouched(false);
          endTouch();
        }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className={`flex justify-center p-3 w-full`}
          >
            {child}
          </div>
        ))}
      </div>
      {progressBar && <div className={`bg-white w-full h-3 mt-12`}>
        <div
          className={`h-full bg-glowy-blue shadow-blue-glow trasition-width duration-300`}
          style={{
            width: progress + "%",
          }}
        ></div></div>}
      
      
      {buttons && (
        <div className={`flex justify-end space-x-4`}>
          <button onClick={slideLeftFunc} name="left">
            Scroll left
          </button>
          <button onClick={slideRightFunc} name="right">
            Scroll right
          </button>
        </div>
      )}
      {circles && (
        <div className={`flex justify-center space-x-4`}>
        {circlesDivs()}
      </div>
      )
      }
    </div>
  );
};

ArrowSlider.propTypes = {
  children: PropTypes.node,
  rowsMobile: PropTypes.number,
  rowsFull: PropTypes.number,
  itemsOnScreen: PropTypes.number,
  buttons: PropTypes.bool,
  circles: PropTypes.bool,
};

export default ArrowSlider;
