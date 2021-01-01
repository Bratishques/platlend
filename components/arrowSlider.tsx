import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import ScreenSizeContext from "../context/screenSizeContext";
import breakpoints from "../utils/breakpoints";

const ArrowSlider = ({ children, rowsFull, rowsMobile, itemsOnScreen = 6 }) => {
  const screenSize = useContext(ScreenSizeContext);
  const [itemsUsed, setItemsUsed] = useState(rowsFull);
  const [scrollState, setScrollState] = useState(1);
  const [isTouched, setIsTouched] = useState(false);
  const [xTouchStart, setXTouchStart] = useState(0);

  const innerRef = useRef<HTMLDivElement | null>();

  const colsAmount = (items) => {
    return Math.ceil(children.length / items);
  };

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
  let xTouchEnd = 0;
  let xMoved = 0;
  const endTouch = () => {
    const gridCheck = Math.ceil(children.length / itemsOnScreen);
    console.log(xTouchStart,xTouchEnd)
    if (xTouchStart - xTouchEnd > screenSize/10 && scrollState < gridCheck ) {
      setScrollState(scrollState + 1);
    } else if (xTouchEnd - xTouchStart > screenSize/10 && scrollState > 1) {
      setScrollState(scrollState - 1);
    }
    setXTouchStart(0);
    xTouchEnd = 0;
    xMoved = 0;
  };

  useEffect(() => {
    innerRef.current.style.left = String(-100 * (scrollState - 1)) + "%";
  }, [scrollState, itemsUsed]);

  useEffect(() => {
    innerRef.current.style.width =
      String((colsAmount(itemsUsed) * 100) / (itemsOnScreen / itemsUsed)) + "%";
  }, [itemsUsed]);

  // useEffect(() => {
  //     const moveTimer = setInterval(() => {
  //         const gridCheck = Math.ceil(children.length / itemsOnScreen)
  //         const currentLeft = -100 * (scrollState - 1)
  //         if (scrollState < gridCheck && xMoved < 0) {
  //             innerRef.current.style.left = String(Number(currentLeft) + Number((xMoved / 2))) + "%"
  //         }
  //         if (scrollState > 1 && xMoved > 0) {
  //             innerRef.current.style.left = String(Number(currentLeft) + Number((xMoved / 2))) + "%"
  //         }
  //     }, 100)

  //     clearInterval(moveTimer)

  // }, [isTouched])

  return (
    <div className={`w-10/12 h-6/12 sm:w-8/12 bg-red-300 overflow-hidden`}>
      <div

      style = {{
          gridTemplateColumns: `repeat(${colsAmount(
            itemsUsed
          )}, minmax(0, 1fr))`,
          gridTemplateRows:`repeat(${itemsUsed}, minmax(0, 1fr))`
      }}
        ref={innerRef}
        className={`grid grid-flow-col  relative transition-left duration-500`}
        onTouchStart={(e) => {
          setXTouchStart(e.touches[0].clientX);

          setIsTouched(true);
        }}
        onTouchMove={(e) => {
          xMoved = e.touches[0].clientX - xTouchStart;
        }}
        onTouchEnd={(e) => {
          xTouchEnd = e.changedTouches[0].clientX;
          setIsTouched(false);
          endTouch();
        }}
      >
        {children.map((child, i) => (
          <div key={i} className={`flex items-center justify-center p-3`}>
            {child}
          </div>
        ))}
      </div>
      <div>Progess Bar!</div>
      <div className={`flex justify-center space-x-4`}>
        <button onClick={slideLeftFunc} name="left">
          Scroll left
        </button>
        <button onClick={slideRightFunc} name="right">
          Scroll right
        </button>
      </div>
    </div>
  );
};

ArrowSlider.propTypes = {
  children: PropTypes.node,
  rowsMobile: PropTypes.number,
  rowsFull: PropTypes.number,
  itemsOnScreen: PropTypes.number
};

export default ArrowSlider;
