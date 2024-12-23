import Work1 from "../../../assets/img/Projects/work1.png";
import Work2 from "../../../assets/img/Projects/work2.png";
import Work3 from "../../../assets/img/Projects/work3.png";
import Work4 from "../../../assets/img/Projects/work4.png";
import Work5 from "../../../assets/img/Projects/work5.png";
import Work6 from "../../../assets/img/Projects/work6.png";
import Work7 from "../../../assets/img/Projects/work7.png";
import Work8 from "../../../assets/img/Designs/work1.png";
import Work9 from "../../../assets/img/Designs/work2.png";

/* =================== TECHS ICONS =================== */

const techData = {
 html: {
  name: "HTML",
  color: "orange",
  icon: <i className="bx bxl-html5"></i>
 },
 css: {
  name: "CSS",
  color: "processing",
  icon: <i className="bx bxl-css3"></i>
 },
 javascript: {
  name: "JavaScript",
  color: "warning",
  icon: <i className="bx bxl-javascript"></i>
 },
 typescript: {
  name: "TypeScript",
  color: "blue",
  icon: <i className="bx bxl-typescript"></i>
 },
 bootstrap: {
  name: "Bootstrap",
  color: "purple",
  icon: <i className="bx bxl-bootstrap"></i>
 },
 jQuery: {
  name: "jQuery",
  color: "blue",
  icon: <i className="bx bxl-jquery"></i>
 },
 node : {
  name: "Node.js",
  color: "lime",
  icon: <i className="bx bxl-nodejs"></i>
 },
 react: {
  name: "React.js",
  color: "cyan",
  icon: <i className="bx bxl-react"></i>
 },
 antd: {
  name: "Ant Design",
  color: "cyan",
  icon: <i className="bx bxl-react"></i>
 },
 angular: {
  name: "Angular",
  color: "red",
  icon: <i className="bx bxl-angular"></i>
 },
 flutter: {
  name: "Flutter",
  color: "processing",
  icon: <i className="bx bxl-flutter" ></i>
 },
 java: {
  name: "Java",
  color: "volcano",
  icon: <i className="bx bxl-java" ></i>
 },
 express: {
  name: "Express.js",
  color: "lime",
  icon: <i className="bx bxl-nodejs"></i>
 },
 mysql: {
  name: "MySQL",
  color: "blue",
  icon: <i className="bx bxs-data"></i>
 },
 sqlserver: {
  name: "SQL Server",
  color: "geekblue",
  icon: <i className="bx bxs-data"></i>
 },
 mongodb: {
  name: "MongoDB",
  color: "green",
  icon: <i className="bx bxl-mongodb"></i>
 },
 figma: {
  name: "Figma",
  color: "error",
  icon: <i className="bx bxl-figma"></i>
 },
 photoshop: {
  name: "Photoshop",
  color: "geekblue",
  icon: <i className="bx bxl-droplet-half"></i>
 }
};

export const projectsData = [
 {
  id: 1,
  image: Work1,
  title: "Movies & Series Finder",
  description: "Web platform that allows you to search for series and movies through integration with the OMDBAPI API. It provides detailed information on titles, synopsis and relevant data to facilitate content selection.",
  category: "web",
  techs: [
   {
    id: 1,
    icon: techData.bootstrap.icon,
    color: techData.bootstrap.color,
    name: techData.bootstrap.name
   },
   {
    id: 2,
    icon: techData.react.icon,
    color: techData.react.color,
    name: techData.react.name
   }
  ],
  deploy_url: "https://movies-app-cruzito-exe.vercel.app",
  source_url: "https://github.com/cruzito-x/movies_app"
 },
 {
  id: 2,
  image: Work2,
  title: "Weather Visualizer",
  description: "Web application designed to visualize the state of the weather in real time, using the OpenWeatherAPI API. It provides detailed weather information such as temperature, humidity and current weather conditions.",
  category: "web",
  techs: [
   {
    id: 1,
    icon: techData.html.icon,
    color: techData.html.color,
    name: techData.html.name
   },
   {
    id: 2,
    icon: techData.css.icon,
    color: techData.css.color,
    name: techData.css.name
   },
   {
    id: 3,
    icon: techData.jQuery.icon,
    color: techData.jQuery.color,
    name: techData.jQuery.name
   }
  ],
  deploy_url: "https://weather-app-v2-one.vercel.app",
  source_url: "https://github.com/cruzito-x/weather-app"
  },
  {
   id: 3,
   image: Work3,
   title: "Color Scales Generator",
   description: "Web tool that allows you to generate custom color scales, ideal for designers and developers looking to optimize the creation of harmonious and effective color palettes.",
   category: "web",
   techs: [
    {
     id: 1,
     icon: techData.bootstrap.icon,
     color: techData.bootstrap.color,
     name: techData.bootstrap.name
    },
    {
     id: 2,
     icon: techData.react.icon,
     color: techData.react.color,
     name: techData.react.name
    }
   ],
   source_url: "https://github.com/cruzito-x/color-palette-generator_app",
   deploy_url: "https://color-palette-generator-app-cruzito-exe.vercel.app"
  },
  {
   id: 4,
   image: Work4,
   title: "Translator",
   description: "Real-time language translator developed to offer a simple and efficient experience in the instantaneous translation of text between different languages.",
   category: "web",
   techs: [
    {
     id: 1,
     icon: techData.html.icon,
     color: techData.html.color,
     name: techData.html.name
    },
    {
     id: 2,
     icon: techData.css.icon,
     color: techData.css.color,
     name: techData.css.name
    },
    {
     id: 3,
     icon: techData.javascript.icon,
     color: techData.javascript.color,
     name: techData.javascript.name
    }
   ],
   deploy_url: "https://translator-app-cruzito-exe.vercel.app",
   source_url: "https://github.com/cruzito-x/translator_app"
  },
  {
   id: 5,
   image: Work5,
   title: "Chat Application",
   description: "Messaging application designed to facilitate real-time communication. Built with modern technologies, it includes features for sending and receiving messages in a seamless manner.",
   category: "app",
   techs: [
    {
     id: 1,
     icon: techData.react.icon,
     color: techData.react.color,
     name: techData.react.name
    },
    {
     id: 2,
     icon: techData.node.icon,
     color: techData.node.color,
     name: techData.node.name
    },
    {
     id: 3,
     icon: techData.mongodb.icon,
     color: techData.mongodb.color,
     name: techData.mongodb.name
    }
   ],
   source_url: "https://github.com/cruzito-x/splice"
  },
  {
   id: 6,
   image: Work6,
   title: "Bookstore Sales System",
   description: "Web invoicing system oriented to sales management in bookstores. It works as a CRM, allowing the visualization of quantifiable data, sales analysis and efficient inventory management.",
   category: "web",
   techs: [
    {
     id: 1,
     icon: techData.antd.icon,
     color: techData.antd.color,
     name: techData.antd.name
    },
    {
     id: 3,
     icon: techData.express.icon,
     color: techData.express.color,
     name: techData.express.name
    },
    {
     id: 4,
     icon: techData.mysql.icon,
     color: techData.mysql.color,
     name: techData.mysql.name
    }
   ],
   source_url: "https://github.com/cruzito-x/library"
  },
  {
    id: 7,
    image: Work7,
    title: "Tech Store E-commerce App",
    description: "E-commerce application developed for a technology products store. It includes catalog, shopping cart and order processing functionalities, ensuring an optimized user experience.",
    category: "app",
    techs: [
    {
      id: 1,
      icon: techData.angular.icon,
      color: techData.angular.color,
      name: techData.angular.name
     },
     {
      id: 2,
      icon: techData.express.icon,
      color: techData.express.color,
      name: techData.express.name
     },
     {
      id: 3,
      icon: techData.mongodb.icon,
      color: techData.mongodb.color,
      name: techData.mongodb.name
     }
    ],
    source_url: "https://github.com/cruzito-x/mean-project"
  },
  {
    id: 8,
    image: Work8,
    title: "Dashboard Design",
    description: "Professional design of a dashboard focused on vulnerability management and visualization. This design prioritizes clarity, usability and organization of critical information.",
    category: "design",
    techs: [
     {
      id: 1,
      icon: techData.figma.icon,
      color: techData.figma.color,
      name: techData.figma.name
     }
    ],
    design_url: "https://www.figma.com/design/3mJfa7medrPycTS5RTTefq/Untitled?t=DLPrFoleZ6yIKa2a-1"
  },
  {
    id: 9,
    image: Work9,
    title: "App for Neurodivergent People",
    description: "Conceptual design of a mobile application for neurodivergent people. The proposal focuses on accessibility, usability and an inclusive experience for diverse users.",
    category: "design",
    techs: [
     {
      id: 1,
      icon: techData.figma.icon,
      color: techData.figma.color,
      name: techData.figma.name
     }
    ],
    design_url: "https://www.figma.com/design/FPWVYw0NSw8f4FefbRZsmC/Untitled?node-id=0-1&t=UCXZUj15c2HJwAkQ-1"
  }
];

export const projects = [
 {
  name: "all"
 },
 {
  name: "web"
 },
 {
  name: "app"
 },
 {
  name: "design"
 }
];
