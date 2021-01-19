import PropTypes from "prop-types";

const TeamIconText = ({ title, text, icon = "" }) => {
  return (
    <div
      className={`group w-95% flex md:flex-row mb-10 justify-center flex-col`}
    >
      <div
        className={`rounded-full items-center justify-center mr-16 group-hover:bg-blue-500 w-6.6r h-6.6r flex-shrink-0 p-4`}
      >
        <img src={`${icon}`}></img>
      </div>
      <div
        className={`ml-4 border-b-2 border-footer-gray w-full group-hover:border-blue-500 text-white `}
      >
        <h4
          className={`text-4xl font-titles leading-loose font-semibold tracking-wide`}
        >
          {title}
        </h4>
        <p
          className={`text-3xl leading-normal pb-12 mt-4 min-h-40 text-subtext`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

TeamIconText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
};

export default TeamIconText;
