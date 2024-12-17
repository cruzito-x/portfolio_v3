import Work1 from "../assets/img/Projects/work1.png";
import Work2 from "../assets/img/Projects/work2.png";
import Work3 from "../assets/img/Projects/work3.png";
import Work4 from "../assets/img/Projects/work4.png";
import Work5 from "../assets/img/Projects/work5.png";
import Work6 from "../assets/img/Projects/work6.png";
import Work7 from "../assets/img/Projects/work7.png";
import Work8 from "../assets/img/Designs/work1.png";
import Work9 from "../assets/img/Designs/work2.png";
// import Work10 from "../../assets/img/Designs/work3.png";

/* =================== TECHS ICONS =================== */

const techData = {
 html: {
  name: "HTML",
  icon: <i className="bx bxl-html5" style={{ color: "var(--text-color)" }}></i>
 },
 css: {
  name: "CSS",
  icon: <i className="bx bxl-css3" style={{ color: "var(--text-color)" }}></i>
 },
 javascript: {
  name: "JavaScript",
  icon: <i className="bx bxl-javascript" style={{ color: "var(--text-color)" }}></i>
 },
 typescript: {
  name: "TypeScript",
  icon: <i className="bx bxl-typescript" style={{ color: "var(--text-color)" }}></i>
 },
 bootstrap: {
  name: "Bootstrap",
  icon: <i className="bx bxl-bootstrap" style={{ color: "var(--text-color)" }}></i>
 },
 jQuery: {
  name: "jQuery",
  icon: <i className="bx bxl-jquery" style={{ color: "var(--text-color)" }}></i>
 },
 node : {
  name: "Node.js",
  icon: <i className="bx bxl-nodejs" style={{ color: "var(--text-color)" }}></i>
 },
 react: {
  name: "React.js",
  icon: <i className="bx bxl-react" style={{ color: "var(--text-color)" }}></i>
 },
 ant: {
  name: "Ant Design"
 },
 angular: {
  name: "Angular",
  icon: <i className="bx bxl-angular" style={{ color: "var(--text-color)" }}></i>
 },
 flutter: {
  name: "Flutter",
  icon: <i className="bx bxl-flutter" style={{ color: "var(--text-color)" }}></i>
 },
 java: {
  name: "Java",
  icon: <i className="bx bxl-java" style={{ color: "var(--text-color)" }}></i>
 },
 express: {
  name: "Express.js"
 },
 mysql: {
  name: "MySQL",
  icon: <i className="bx bxs-data" style={{ color: "var(--text-color)" }}></i>
 },
 sqlserver: {
  name: "SQL Server",
  icon: <i className="bx bxs-data" style={{ color: "var(--text-color)" }}></i>
 },
 mongodb: {
  name: "MongoDB",
  icon: <i className="bx bxl-mongodb" style={{ color: "var(--text-color)" }}></i>
 },
 figma: {
  name: "Figma",
  icon: <i className="bx bxl-figma" style={{ color: "var(--text-color)" }}></i>
 },
 photoshop: {
  name: "Photoshop",
  icon: <i className="bx bxl-droplet-half" style={{ color: "var(--text-color)" }}></i>
 }
};

export const projectsData = [
 {
  id: 1,
  image: Work1,
  title: "Movies & Series finder",
  description: "xd",
  category: "web",
  techs: [
   {
    id: 1,
    icon: techData.bootstrap.icon,
    name: techData.bootstrap.name
   },
   {
    id: 2,
    icon: techData.react.icon,
    name: techData.react.name
   }
  ],
  deploy_url: "https://movies-app-cruzito-exe.vercel.app"
 },
 {
  id: 2,
  image: Work2,
  title: "Weather visualizer",
  description: "xd",
  category: "web",
  techs: [
   {
    id: 1,
    icon: techData.html.icon,
    name: techData.html.name
   },
   {
    id: 2,
    icon: techData.css.icon,
    name: techData.css.name
   },
   {
    id: 3,
    icon: techData.jQuery.icon,
    name: techData.jQuery.name
   }
  ],
  deploy_url: "https://weather-app-v2-one.vercel.app"
  },
  {
   id: 3,
   image: Work3,
   title: "Color scales generator",
   description: "xd",
   category: "web",
   techs: [
    {
     id: 1,
     icon: techData.bootstrap.icon,
     name: techData.bootstrap.name
    },
    {
     id: 2,
     icon: techData.react.icon,
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
   description: "xd",
   category: "web",
   techs: [
    {
     id: 1,
     
     icon: techData.html.icon,
     name: techData.html.name
    },
    {
     id: 2,
     icon: techData.css.icon,
     name: techData.css.name
    },
    {
     id: 3,
     icon: techData.javascript.icon,
     name: techData.javascript.name
    }
   ],
   deploy_url: "https://translator-app-cruzito-exe.vercel.app"
  },
  {
   id: 5,
   image: Work5,
   title: "Chat application",
   description: "xd",
   category: "app",
   techs: [
    {
     id: 1,
     icon: techData.react.icon,
     name: techData.react.name
    },
    {
     id: 2,
     icon: techData.node.icon,
     name: techData.node.name
    },
    {
     id: 3,
     icon: techData.mongodb.icon,
     name: techData.mongodb.name
    }
   ],
   deploy_url: "https://github.com/cruzito-x/splice"
  },
  {
   id: 6,
   image: Work6,
   title: "Bookstore sales system",
   description: "xd",
   category: "web",
   techs: [
    {
     id: 1,
     icon: techData.react.icon,
     name: techData.react.name
    },
    {
     id: 3,
     icon: techData.node.icon,
     name: techData.express.name
    },
    {
     id: 4,
     icon: techData.mysql.icon,
     name: techData.mysql.name
    }
   ],
   deploy_url: "https://github.com/cruzito-x/library"
  },
  {
    id: 7,
    image: Work7,
    title: "Tech store e-commerce app",
    description: "xd",
    category: "app",
    techs: [
    {
      id: 1,
      icon: techData.angular.icon,
      name: techData.angular.name
     },
     {
      id: 2,
      icon: techData.node.icon,
      name: techData.express.name
     },
     {
      id: 3,
      icon: techData.mongodb.icon,
      name: techData.mongodb.name
     }
    ],
    deploy_url: "https://github.com/cruzito-x/mean-project"
  },
  {
    id: 8,
    image: Work8,
    title: "Dashboard design",
    description: "xd",
    category: "design",
    techs: [
     {
      id: 1,
      icon: techData.figma.icon,
      name: techData.figma.name
     }
    ],
    design_url: "https://www.figma.com/design/3mJfa7medrPycTS5RTTefq/Untitled?t=DLPrFoleZ6yIKa2a-1"
  },
  {
    id: 9,
    image: Work9,
    title: "Market app",
    description: "xd",
    category: "design",
    techs: [
     {
      id: 1,
      icon: techData.figma.icon,
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
