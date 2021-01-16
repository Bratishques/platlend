import Head from "next/head";
import ArrowSlider from "../../components/arrowSlider";
import Header from "../../components/header";
import Offering from "../../components/offering";
import TeamIconText from "../../components/teamIconText";
import { useContext } from "react";
import ScreenSizeContext from "../../context/screenSizeContext";
import breakpoints from "../../utils/breakpoints";
import {
  getLocalizationProps,
  LanguageContextProvider,
} from "../../context/languageContext";
import useTranslation from "../../hooks/useTranslation";
import TechGrid from "../../components/techGrid";
import { relative } from "path";


export default function Home({ localization }) {
  const { t } = useTranslation(localization);
  const screenSize = useContext(ScreenSizeContext);
  const offerings = t("offerings");
  console.log(screenSize);
  
  return (
    <LanguageContextProvider localization={localization}>
    
      <div>
     
        <Head>
          <title>Plat Land</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        

        <main className={`w-full font-main`}>
          <section
            id="hero-section"
            style={{
              backgroundImage: `url("/images/hero-back.jpg")`,
            }}
            className={`relative h-95vh md:h-screen w-full`}
          >
            <Header ctx={localization} />
            <div
              id="ellipse-div"
              className={`w-1/3 h-3/4 bg-auto top-64 `}
              style={{
                background: `url('/images/half-ellipse.svg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "37.5rem",
                position: "absolute",
                left: "0px",
              }}
            />
            <div
              className={`absolute top-64 px-12 md:px-32 text-white text-center lg:text-left z-10`}
            >
              <h1 className={`text-6xl md:text-8xl w-full leading-tight mb-12 font-titles font-bold`}>
                {t("heroText")}
              </h1>
              <h2 className={`text-5xl md:text-7xl w-full leading-tight font-titles font-semibold`}>
                {t("heroSubText")}
              </h2>
            </div>
            <img
              className={`bottom-0 w-full absolute z-10`}
              src={screenSize <= breakpoints.md ? `/images/deliver-software-mobile.png` : `/images/deliver-software-preface.png`}
            ></img>
          </section>
          <section
            className={`w-full py-36 px-8 flex justify-center bg-primary-bg`}
          >
            <div
              className={`w-full md:w-8/12 flex items-center flex-col text-white text-center`}
            >
              <img src={`/images/logo-squares.svg`} className={`mb-16`}></img>
              <h2 className={`text-7xl mb-12 font-titles font-bold`}>WHO WE ARE</h2>
              <p className={`text-3xl text-left leading-normal mb-12`}>
                Platinum Software Development company provides unmatched
                solutions for the clients. We give real business value through
                engineering-based solutions model that offers innovative and
                cost-effective software development.
                <br />
                <br />
                Platinum delivers software products the way you want them to be.
                Whether your problem is big or small, we have the industry
                experience and technical capabilities you need, to take your
                company into the successful future and beyond!
                <br />
                <br />
                Do not wait for miracles, just come to us "IT Wizards" who will
                help you to achieve what you want.
              </p>
              <div className={`flex justify-between items-center w-full`}>
                <p className={`text-2xl text-left`}>CEO of Platinum Software Development company</p>
                <img src={`/images/one-sign.gif`} className={`h-36`}></img>
              </div>
            </div>
          </section>
          <section
            className={`w-full px-4 md:px-24 bg-primary-bg flex flex-col pt-36 items-center`}
          >
            {/* Divider */}
            <div
              className={`self-center w-1/2 md:w-1/4 h-2 bg-glowy-blue shadow-blue-glow`}
            >
              <br />
            </div>
            {/* Divider */}
            <div className={`flex flex-wrap pt-64 justify-center `}>
              <div className={`mb-32 w-95% flex flex-wrap`}>
                <div className={`md:w-6/12 w-full text-white`}>
                  <h2
                    className={`text-4xl md:text-7xl mb-12 md:text-shadow-blue-offset text-shadow-none font-bold`}
                  >
                    WHY PLATINUM Q DAO ENGINEERING?
                  </h2>
                  <p
                    className={`text-4xl text-left leading-normal mb-12 pr-12`}
                  >
                    Our strength is our employees, with vast experience in
                    executing numerous projects in diverse technology and
                    business domains, we are true technology practitioners and
                    keep up with the fast-changing technology domain.
                    <br />
                    <br />
                    We help you to discover, develop, and deliver the right
                    technology for the right task.
                  </p>
                </div>

                <div
                  className={`md:w-6/12 w-95% flex justify-center md:justify-end`}
                >
                  <img
                    className={`md:max-w-56 w-full`}
                    src={`/images/image12.jpg`}
                  />
                </div>
              </div>
            </div>
            {/* ROW 1 */}
            <div className={`flex w-95% flex-col md:flex-row mb-48`}>
              <div className={`md:w-6/12 w-95% flex md:justify-start`}>
                <div className={`md:w-95%`}>
                  <img
                    className={`md:mb-0 object-contain border-glowy-blue border-2 mb-24`}
                    src={`/images/image9.jpg`}
                  ></img>
                </div>
              </div>
              <div
                className={`md:w-6/12 flex flex-col w-95% md:justify-around md:items-center md:ml-16 ml-0`}
              >
                <TeamIconText
                  title={`Experienced`}
                  text={`More than 5 years in software development. Moreover, we are pioneers in cutting-edge technologies such as blockchain.`}
                  icon={`/images/ArtDesign2.svg`}
                />
                <TeamIconText
                  title={`Global`}
                  text={`Our team is based in 19 countries. Therefore, we don't have barriers or shortcomings that come with outsourcing.`}
                  icon={`/images/ArtDesign3.svg`}
                />
              </div>
            </div>
            {/* ROW 2 */}
            <div className={`flex w-95% flex-col md:flex-row-reverse mb-48`}>
              <div className={`md:w-6/12 w-95% flex md:justify-end `}>
                <div className={`w-95%`}>
                  <img
                    className={`border-glowy-blue border-2 mb-24 md:mb-0 object-contain`}
                    src={`/images/image10.jpg`}
                  ></img>
                </div>
              </div>
              <div
                className={`md:w-6/12 flex flex-col w-95% md:justify-around md:items-center md:mr-40 ml-0`}
              >
                <TeamIconText
                  title={`Flexible`}
                  text={`We can tailor our processes to your needs. We'll find an arrangement that works best for you.`}
                  icon={`/images/ArtDesign4.svg`}
                />
                <TeamIconText
                  title={`Integrated`}
                  text={`We incorporate your team into the process to meet your goals.`}
                  icon={`/images/ArtDesign5.svg`}
                />
              </div>
            </div>
            {/* ROW 3*/}
            <div className={`flex w-95% flex-col md:flex-row mb-48`}>
              <div className={`md:w-6/12 w-95% flex md:justify-start`}>
                <div className={`w-95%`}>
                  <img
                    className={`mb-24 md:mb-0 object-contain border-glowy-blue border-2`}
                    src={`/images/image11.jpg`}
                  ></img>
                </div>
              </div>
              <div
                className={`md:w-6/12 flex flex-col w-95% md:justify-around md:items-center md:ml-16 ml-0`}
              >
                <TeamIconText
                  title={`Effective & Efficient`}
                  text={`We bring the right expertise at the right time. We do not hire and assign individuals to our customers. Instead, we leverage the expertise of our team as a whole.`}
                  icon={`/images/ArtDesign1.svg`}
                />
                <TeamIconText
                  title={`Move Fast`}
                  text={`As a new-age company, we move with agility throughout.`}
                  icon={`/images/ArtDesign6.svg`}
                />
              </div>
            </div>
          </section>
          <section
            className={`min-h-screen w-full bg-primary-bg text-white py-20 px-10 flex justify-center`}
          >
            <div className={`w-95%`}>
              <h2
                className={`text-center text-6xl md:text-7xl mb-12 text-shadow-blue-offset md:text-left font-bold`}
              >
                WE OFFER
              </h2>
              {screenSize >= breakpoints.sm ? (
                <div
                  className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8`}
                >
                  {offerings.map((item) => {
                    return (
                      <Offering
                        title={item.title}
                        items={item.items}
                        icon={item.icon}
                        key={`${item.title}`}
                      />
                    );
                  })}
                </div>
              ) : (
                  <ArrowSlider
                    rowsFull={3}
                    rowsMobile={2}
                    itemsDesktop={2}
                    buttons={false}
                    circles={false}
                    progressBar={true}
                  >
                    {offerings.map((item, i) => {
                      return (
                        <Offering
                          title={item.title}
                          items={item.items}
                          icon={item.icon}
                          key={`${item.title}`}
                        />
                      );
                    })}
                  </ArrowSlider>
                )}
            </div>
          </section>
          {/* TECH STACK */}
          <section className={`pt-24 w-full bg-primary-bg flex justify-center`}>
            <div className={`px-6 w-full md:w-10/12 lg:w-18 flex flex-col`}>
              <h2 className={`w-full text-6xl md:text-7xl text-center mb-12 text-shadow-blue-offset text-white font-bold`}>
                TECHNOLOGY STACK
            </h2>
            <TechGrid techStack={t('techStack')} stacks={t('stacks')}/>
            </div>
          </section>
          {/* CASE STUDIES */}
          <section className={`pb-48 w-full bg-primary-bg flex justify-center items-center text-white flex-col md:px-24 px-12 h-full`}>
            <h2  className={`text-7xl mb-12 text-shadow-blue-offset text-left align-start w-full font-bold`}>
              {t("caseStudy")}
            </h2>
            <ArrowSlider
            rowsFull={1}
            rowsMobile={1}
            itemsDesktop={4}
            itemsTablet={3}
            itemsMobile={2}
            progressBar={true}
            buttons={true}
            >
              {Object.entries(t("cases")).map((a, i) => {
                return (
                  <div
                  className={`lg:px-24 md:px-16 px-2`}
                  key={`${a[0]}`}
                  >
                  <img
                  draggable={false}
                  src={`${a[1]}`}
                  className={`mb-12 md:w-22r md:h-34r h-22r w-64  rounded-full object-cover md:filter-grayed`}
                  alt={`${a[0]}`}
                  />
                  
                  <h2 className={`text-4xl font-titles font-semibold leading-normal`}
                  >{a[0]}</h2>
                </div>
                )
              })}
            </ArrowSlider>
          </section>
           {/* TESTIMONIALS*/}
          <section className={`w-full bg-primary-bg flex flex-col justify-center px-12 md:px-24 text-white`}>
            <h2 className={`w-full text-6xl md:text-7xl text-center mb-12 text-shadow-blue-offset text-white font-bold`}>
              TESTIMONIALS
            </h2>
              <ArrowSlider
              itemsDesktop={2}
              itemsTablet={1}
              itemsMobile={1}
              rowsFull={1}
              rowsMobile={1}
              progressBar={true}
              buttons={true}
              >
                {Object.entries(t("testimonials")).map((testimonal, i) => {
                  interface TestimonalData {
                    photo: string;
                    text: string;
                    role?: string;
                    firm?: string;
                  }
                  const testimonalData = testimonal[1] as TestimonalData

                  return (

                  <div className={`w-full bg-primary-bg relative pt-100px `}>
                  <div key={`${testimonal[0]}`}className={`bg-testimonial-card w-full flex flex-col items-center px-12 md:px-24 h-full pb-16 border-glowy-blue border-2 shadow-blue-glow`}>
                  <img src={`${testimonalData.photo}`} className={`relative object-contain rounded-full z-10 mt-min100px border-glowy-blue border-2 shadow-blue-glow`} draggable={false}/> 
                    <h3 className={`text-5xl mt-8 mb-8 text-center`}>
                      {testimonal[0]}
                    </h3>
                    {
                    <p className={`text-2xl text-center mb-8 h-6`}>
                      {testimonalData.role && testimonalData.role}
                    </p>
                    }
                    <p className={`text-2xl  text-center mb-12`}>
                      {testimonalData.text}
                    </p>
                    <img src={`${testimonalData.firm}`} className={`relative bottom-0 max-h-7.5r`} draggable={false}/>
                    </div>
                  </div>)
                })}
              </ArrowSlider>
          </section >
          {/* OUR CLIENTS*/}
          <section className={`w-full bg-primary-bg flex flex-col justify-center px-12 md:px-24 text-white py-24`}>
          <h2 className={`w-full text-6xl md:text-7xl text-center mb-24 text-shadow-blue-offset text-white font-bold`}>
            {t("ourClients")}
          </h2>
          <ArrowSlider
          itemsDesktop={6}
          itemsTablet={6}
          itemsMobile={6}
          rowsFull={3}
          rowsMobile={6}
          progressBar={true}
          buttons={true}
          >
          {t("clients").map((client) => {
            return (
              <div key={`${client.link}`} className = {`group flex justify-center`}>
                <a target={`blank`} href={`${client.link}`} className={`h-72 md:h-96 flex group-hover: `} draggable={`false`}>
                <img src={`${client.image}`} draggable="false" className={`object-cover border-glowy-blue border-2 opacity-50 group-hover:opacity-100`}/>
                </a>
              </div>
            )
            
          })}
          </ArrowSlider>
          </section>
        </main>
      </div>
    </LanguageContextProvider>
  );
}

export const getStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "hero");
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: ["en", "ja"].map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};
