import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import ScreenSizeContext from "../context/screenSizeContext";
import breakpoints from "../utils/breakpoints";
import { gsap } from "gsap";

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

  const calc = () => {
    if (itemsUsed > 1) {
      return (-scrollState+1) * (children.length/Math.ceil(children.length/itemsOnScreen)/itemsOnScreen) * (itemsOnScreen/children.length) * document.getElementById(`slider${children.length}${rowsFull}`).getBoundingClientRect().width
    }
    else {
      return (-scrollState+1) * (itemsOnScreen/children.length) * document.getElementById(`slider${children.length}${rowsFull}`).getBoundingClientRect().width
    }
  
  }
  
  

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
      innerRef.current.style.transition = "all 0.5s ease-in-out";
    }
  }, [isTouched]);

  //set the offset to the scroll state level
  useEffect(() => {
    innerRef.current.style.width =
      String((colsAmount(itemsUsed) * 100) / (itemsOnScreen / itemsUsed)) + "%";
  }, [itemsUsed, itemsOnScreen, scrollState]);

  useEffect(() => {
    console.log(document.getElementById(`slider${children.length}${rowsFull}`).getBoundingClientRect().width/3)
    document.getElementById(`slider${children.length}${rowsFull}`).style.transform = `translate3d(${calc()}px, 0px, 0px)`
    //gsap.to(`#slider${children.length}${rowsFull}`, {x: calc(), duration: 0.7})
  }, [scrollState, itemsUsed, itemsOnScreen,screenSize, xTouchStart]);

  useEffect(() => {
    if (scrollState > gridCheck) {
      setScrollState(1)
    }
    setProgress((scrollState / gridCheck) * 100);
   
  }, [scrollState, itemsOnScreen]);



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
        id={`slider${children.length}${rowsFull}`}
        style={{
          gridTemplateColumns: `repeat(${colsAmount(
            itemsUsed
          )}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${itemsUsed}, minmax(0, 1fr))`,
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
          cursor: "grab",
        }}
        
        ref={innerRef}
        className={`slider${children.length}${rowsFull} grid grid-flow-col relative`}
        onMouseDown={(e) => {
          setXTouchStart(e.clientX)
          setIsTouched(true);
        }}
        onMouseMove={(e) => {
          if (isTouched) {
            const currentLeft = calc();
            xMoved = e.clientX - xTouchStart
            const gridCheck = Math.ceil(children.length / itemsOnScreen);
            if (scrollState < gridCheck && xMoved < 0) {
              document.getElementById(`slider${children.length}${rowsFull}`).style.transform = `translate3d(${calc() + xMoved}px, 0px, 0px)`
              //innerRef.current.style.transform = `translateX(${String(Number(currentLeft) + Number(xMoved*100*itemsOnScreen/children.length/screenSize))}%)`
                ;
            }
            if (scrollState > 1 && xMoved > 0) {
              document.getElementById(`slider${children.length}${rowsFull}`).style.transform = `translate3d(${calc() + xMoved}px, 0px, 0px)`
              //gsap.to(`#slider${children.length}${rowsFull}`, {x: currentLeft + xMoved})
              //innerRef.current.style.transform = `translateX(${String(Number(currentLeft) + Number(xMoved*100*itemsOnScreen/children.length/screenSize))}%)`
            }
          }

        }}

        onMouseUp ={(e) => {
          xTouchEnd = e.clientX
          setIsTouched(false);
          endTouch();
        }}
        onTouchStart={(e) => {
          setXTouchStart(e.touches[0].clientX);
          setYTouchStart(e.touches[0].clientY)
          setIsTouched(true);
        }}
        onTouchMove={(e) => {
          xMoved = e.touches[0].clientX - xTouchStart;
          yMoved = e.touches[0].clientY - yTouchStart
          const gridCheck = Math.ceil(children.length / itemsOnScreen);
          const currentLeft = calc();
          if (yMoved > 10 || yMoved < -10) {
            return
          }
          if (scrollState < gridCheck && xMoved < 0) {
            document.getElementById(`slider${children.length}${rowsFull}`).style.transform = `translate3d(${calc() + xMoved}px, 0px, 0px)`
            //gsap.to(`#slider${children.length}${rowsFull}`, {x: currentLeft + xMoved})
            //innerRef.current.style.transform = `translateX(${String(Number(currentLeft) + Number(xMoved*100*itemsOnScreen/children.length/screenSize))}%)`
              ;
          }
          if (scrollState > 1 && xMoved > 0) {
            document.getElementById(`slider${children.length}${rowsFull}`).style.transform = `translate3d(${calc() + xMoved}px, 0px, 0px)`
            //gsap.to(`#slider${children.length}${rowsFull}`, {x: currentLeft + xMoved})
            //innerRef.current.style.transform = `translateX(${String(Number(currentLeft) + Number(xMoved*100*itemsOnScreen/children.length/screenSize))}%)`
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
      {progressBar && <div className={`bg-white w-full mt-12`}>
        <div
          className={`h-full bg-glowy-blue shadow-blue-glow trasition-width duration-300`}
          style={{
            height: "2px",
            width: progress + "%",
          }}
        ></div></div>}
      
      
      {buttons && (
        <div className={`flex justify-end space-x-16 mt-8`}>
          <button onClick={slideLeftFunc} name="left">
            <img src={"/images/arrow-left.svg"}/>
          </button>
          <button onClick={slideRightFunc} name="right">
          <img src={"/images/arrow-right.svg"}/>
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
