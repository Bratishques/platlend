import PropTypes from "prop-types";
import { useState } from "react";
const HeaderLink = ({ dropdown=[], text, link }) => {
  const [isDropped, setIsDropped] = useState(false);
  return (
    <div 
    onMouseMove={() => {
      setIsDropped(true)
    }}
    onMouseLeave={() => {
      setIsDropped(false)
    }}
    className={`p-3 text-2xl text-white h-100 flex h-full justify-center`}>
      <a href={link} className={`flex header-link relative  justify-self-center self-center justify-center`}>
        {text}
      </a>
      {dropdown.length && isDropped ? 
      <div 
      onMouseLeave={() => {
        setIsDropped(false)
      }}
      className={`absolute p-3 bg-glowy-blue px-24 mt-16  align-center`}>
      {dropdown.map((a,i) => {
        return <HeaderLink text={a.text} link={a.link}/>
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
