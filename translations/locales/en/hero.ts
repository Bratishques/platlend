const basePath = "/images/items/";
const techPath = "/images/techStack/";
const frontPath = `${techPath}frontend/`;
const backPath = `${techPath}backend/`;
const testimonialsPath = `/images/testimonials/`;
const casesPath = `/images/cases/`;
const clientsPath = `/images/clients/`;
const mediaPath = `/images/media/`;
const hero = {
  heroText: "PLATINUM SOFTWARE DEVELOPMENT:",
  heroSubText: "LEADERS IN THE DEFI AND BLOCKCHAIN SOFTWARE SOLUTIONS",
  offerings: [
    {
      title: "Mobile App Development",
      items: [
        "iOS, Android, Cross-platform",
        "Improving an existing application",
        "Trending technologies",
      ],
      icon: `${basePath}mobile.svg`,
    },
    {
      title: "DevOps",
      items: [
        "Accelerate Product Time to Market",
        "Decrease Overall Project Costs",
        "Quick Respond to Market Changes",
      ],
      icon: `${basePath}DevOps.svg`,
    },
    {
      title: "Software Testing and QA",
      items: [
        "Wide range of testing tools",
        "In-depth product analysis",
        "The lowest level of risks",
      ],
      icon: `${basePath}software.svg`,
    },
    {
      title: "IT Consulting",
      items: [
        "Digital transformation consulting",
        "Optimization and digitalization",
        "Customer loyalty and retention",
      ],
      icon: `${basePath}consulting.svg`,
    },
    {
      title: "Dedicated Development Teams",
      items: [
        "Scale your business",
        "Fully configurable team",
        "Proven specialists with strong skills",
      ],
      icon: `${basePath}dedicated.svg`,
    },
    {
      title: "Enterprise Software Development",
      items: [
        "Fully-customized solutions",
        "High-quality data governance",
        "Catalyzing a business with indisputable software",
      ],
      icon: `${basePath}enterprise.svg`,
    },
    {
      title: "UI and UX Services",
      items: [
        "Attractiveness for the clients",
        "Functionality combined with utility",
        "Experience and creativity in every interface",
      ],
      icon: `${basePath}UI-and-UX.svg`,
    },
    {
      title: "Blockchain Development",
      items: [
        "Consulting Enterprise Blockchain",
        "Development of DApp Development",
        "Custom Blockchain Development & Integration Blockchain",
      ],
      icon: `${basePath}blockchain.svg`,
    },
  ],
  techStack: [
    "Frontend",
    "Backend",
    "Infrastructure",
    "Database",
    "Automation Testing",
  ],
  stacks: {
    Frontend: {
      vue: `${frontPath}vue.svg`,
      react: `${frontPath}react.svg`,
      js: `${frontPath}js.svg`,
      jQuery: `${frontPath}jquery.svg`,
      ts: `${frontPath}ts.svg`,
      "mobile-first": `${frontPath}mobile-first.svg`,
      bem: `${frontPath}bem.svg`,
      css: `${frontPath}css.svg`,
      responsive: `${frontPath}responsive.svg`,
      sass: `${frontPath}sass.svg`,
      less: `${frontPath}less.svg`,
      npm: `${frontPath}npm.svg`,
      animation: `${frontPath}animation.svg`,
      angular: `${frontPath}angular.svg`,
      gulp: `${frontPath}gulp.svg`,
      babel: `${frontPath}babel.svg`,
      eslint: `${frontPath}eslint.svg`,
      composer: `${frontPath}composer.svg`,
      yarn: `${frontPath}yarn.svg`,
    },
    Backend: {
      java: `${backPath}java.svg`,
      php: `${backPath}php.svg`,
      nodejs: `${backPath}nodejs.svg`,
      websocket: `${backPath}websocket.svg`,
      spring: `${backPath}spring.svg`,
      yii: `${backPath}yii.svg`,
      python: `${backPath}python.svg`,
      phalcon: `${backPath}phalcon.svg`,
    },
    Infrastructure: {},
    Database: {},
    "Automation Testing": {},
  },
  caseStudy: "CASE STUDY",
  cases: {
    "Asian Bank Mobile Application": `${casesPath}asianbank.svg`,
    "The Noah Blockchain": `${casesPath}noah.svg`,
    "Roseon Wallet": `${casesPath}roseon.svg`,
    "QDAO Dashboard": `${casesPath}qdao.jpg`,
    "Noah Blockchain Wallet": `${casesPath}noahwallet.svg`,
    "Bounty Platform": `${casesPath}bounty.svg`,
    "Q MATRIX Affiliate Module": `${casesPath}qmatrix.svg`,
    "Q DAO Ecosystem": `${casesPath}qdaoeco.svg`,
    "UBAI - Online Educational Platfom": `${casesPath}ubai.svg`,
    "Embily Mobile Banking App": `${casesPath}embily.svg`,
    "QDAO DEFI Platform": `${casesPath}qdaodefi.png`,
  },
  testimonials: {
    "ANDREW PLOTNIKOV": {
      role: "Chief Risk Officer",
      text:
        "We ordered Legal opinion, and the team made everything great and in short terms. They also provided additional services as a bonus. Thank you very much for a good-quality service.",
      firm: `${testimonialsPath}hyperquant.png`,
      photo: `${testimonialsPath}andrew-plotnikov.png`,
    },
    "GUSTAVO ASTIAZARAN": {
      role: `CMO`,
      text: `The work from Platinum was of the highest quality and the service by there team was excellent. They always kept me informed about every step in the process and delivered on time.`,
      firm: `${testimonialsPath}docademic.png`,
      photo: `${testimonialsPath}gustavo-astiazaran.png`,
    },
    "INA SAMOVICH": {
      role: "CEO",
      text:
        "I consider Platinum a good project partner with lots of experience in PR, marketing and product development. They listen to the needs of a client and bring their expertise for the best decision. This wonderful team is able to implement related activities on a proper level and contribute to the project results.",
      firm: `${testimonialsPath}coppay.png`,
      photo: `${testimonialsPath}ina-samovich.png`,
    },
    DAVID: {
      role: "",
      text:
        "Service was good, wish we had engaged you guys earlier. Happy to be a reference point for other clients.",
      firm: `${testimonialsPath}h.png`,
      photo: `${testimonialsPath}david.png`,
    },
    "PERSIO FLEXA": {
      role: "",
      text:
        "It was great to work with your team, pass confidence, respond quickly, everything done correctly and with deadlines. We will negotiate again with certainty.",
      firm: `${testimonialsPath}gimmer.png`,
      photo: `${testimonialsPath}persio-flexa.png`,
    },
    "FLAVIUS BURCA": {
      role: "CTO",
      text: "I am happy with your services so far. The feedback is great!",
      firm: `${testimonialsPath}s.png`,
      photo: `${testimonialsPath}flavius-burca.png`,
    },
  },
  ourClients: "OUR CLIENTS",
  clients: [
    {
      link: "https://www.lotusenergy.io/",
      image: `${clientsPath}lotus.jpg`,
    },
    {
      link:
        "https://www.ana.co.jp/en/jp/amc/reference/tukau/skycoin/ticket-purchase.html",
      image: `${clientsPath}ana.jpg`,
    },
    {
      link: "https://acd-coin.com/",
      image: `${clientsPath}acd.jpg`,
    },
    {
      link: "http://mindol.net/",
      image: `${clientsPath}mindol.jpg`,
    },
    {
      link: "https://z-popdream.io/",
      image: `${clientsPath}z-pop-dream.jpg`,
    },
    {
      link: "https://crypterium.com/",
      image: `${clientsPath}crypterium.jpg`,
    },
    {
      link: "https://noahcity.org/en",
      image: `${clientsPath}noah.jpg`,
    },
    {
      link: "https://swissborg.com/",
      image: `${clientsPath}soccoin.jpg`,
    },
    {
      link: "https://www.hugedomains.com/domain_profile.cfm?d=soccoin&e=com",
      image: `${clientsPath}welltrado.jpg`,
    },
    {
      link: "https://vectorspace.ai/",
      image: `${clientsPath}vectorspace.jpg`,
    },
    {
      link: "https://fundrequest.io/requests?phase=open",
      image: `${clientsPath}fundrequest.jpg`,
    },
    {
      link: "https://fundrequest.io/requests?phase=open",
      image: `${clientsPath}fundrequest.jpg`,
    },
    {
      link: "https://fundrequest.io/requests?phase=open",
      image: `${clientsPath}fundrequest.jpg`,
    },
    {
      link: "https://fundrequest.io/requests?phase=open",
      image: `${clientsPath}fundrequest.jpg`,
    },
  ],
  media: "MEDIA",
  mediaArr: [
    {
      title: "This company demystifies blockchain development for enterprises",
      image: `${mediaPath}logo-cointelegraph.svg`,
    },
    {
      title: "Top 20 Promising Blockchain Projects in 2020",
      image: `${mediaPath}logo-hn.svg`,
    },
    {
      title: "Почему DPoS станет основой демократических выборов на блокчейне",
      image: `${mediaPath}hub.svg`,
    },
    {
      title: "This company demystifies blockchain development for enterprises",
      image: `${mediaPath}logo-cointelegraph.svg`,
    },
    {
      title: "Top 20 Promising Blockchain Projects in 2020",
      image: `${mediaPath}logo-hn.svg`,
    },
    {
      title: "Почему DPoS станет основой демократических выборов на блокчейне",
      image: `${mediaPath}hub.svg`,
    },
  ],
};

export default hero;
