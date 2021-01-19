import PropTypes from "prop-types";
const Offering = ({
  title = "Hello",
  items = ["hello, i'm item1", "hello, i'm item1", "hello, i'm item1"],
  icon = "",
}) => {
  return (
    <div
      className={`group hover:bg-offer-cards-hover hover:border-offer-cards-hover transition-all duration-300 -w-full h-full py-12 px-8 text-white border-glowy-blue border-2 rounded-lg w-full`}
    >
      <div
        className={`relative mb-8 h-20 w-20 flex justify-center items-center`}
      >
        <div
          className={`absolute transition-all group-hover:bg-glowy-blue transform h-1 w-1 translate-y-16 -translate-x-16 group-hover:h-full group-hover:w-full rounded-full group-hover:scale-125
            group-hover:translate-x-0 group-hover:translate-y-0 origin-center duration-500`}
        ></div>
        <img src={`${icon}`} className={`p-2 relative z-30`} />
      </div>
      <h4
        className={`md:text-3xl text-4xl min-h-56 tracking-wide font-titles font-semibold`}
      >
        {title}
      </h4>
      <div
        className={`md:text-xl text-2xl leading-normal h-40 flex flex-col justify-between`}
      >
        {items.map((a) => {
          return (
            <p key={a} className={``}>
              {a}
            </p>
          );
        })}
      </div>
    </div>
  );
};

Offering.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  items: PropTypes.array,
};
export default Offering;
