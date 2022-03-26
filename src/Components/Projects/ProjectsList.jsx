import portfolio from "../../Assets/Projects/portfolio.jpg";
import skymov from "../../Assets/Projects/skymov.jpg";
import weatherapp from "../../Assets/Projects/weatherapp.jpg";
import todo from "../../Assets/Projects/todo.jpg";
import angora from "../../Assets/Projects/angora.jpg";

export const projects = [
  {
    title: "Personal Portfolio",
    img: portfolio,
    desc: "It's the first portfolio I created with minimalist design, it includes some new features I learned like dark/light theme and loading page.",
    tools: [
      "React",
      "JSX",
      "Bootstrap",
      "Fontawesome",
      "React-spinners",
      "Github Pages"
    ],
    links: [
      "https://beshoys.github.io/portfolio",
      "https://github.com/BeshoyS/portfolio",
    ],
  },
  {
    title: "SkyMov Movies App",
    img: skymov,
    desc: "A basic movie app that shows movies, tv-series, and people, using themoviebd Api. in this project I used context API for state management and Axios for fetching data. it also includes a routing and signup/login system. to test the website, you can register or login with email: beshoysaid@gmail.com and password: Beshoy123",
    tools: [
      "React",
      "JSX",
      "React Router V6",
      "ContextApi",
      "Bootstrap",
      "Fontawesome",
      "Jwt Decode",
      "Joi",
      "Axios",
      "Github Pages"
    ],
    links: [
      "https://beshoys.github.io/skymov-movies-app/#/home",
      "https://github.com/BeshoyS/skymov-movies-app",
    ],
  },
  {
    title: "Weather App",
    img: weatherapp,
    desc: "The first app I coded where used API and IP address detector and a lot of DOM practices.",
    tools: ["CSS", "JavaScript", "Weather API", "IP Detector API"],
    links: [
      "https://beshoys.github.io/weather-app/",
      "https://github.com/BeshoyS/weather-app",
    ],
  },
  {
    title: "Todo App",
    img: todo,
    desc: "Todo List App that includes all CRUD operations.",
    tools: ["HTML","CSS", "JavaScript"],
    links: [
      "https://beshoys.github.io/todo-list-app/",
      "https://github.com/BeshoyS/todo-list-app",
    ],
  },
  {
    title: "Angora Website",
    img: angora,
    desc: "A designing agency website.",
    tools: ["HTML","CSS","Bootstrap"],
    links: [
      "https://beshoys.github.io/angora-website/",
      "https://github.com/BeshoyS/angora-website",
    ],
  },
];
