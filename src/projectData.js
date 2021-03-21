import commerce from "./images/projects/e-commerce.png";
import memories from "./images/projects/memories.png";
import netflix from "./images/projects/netflix.png";
import portfolio from "./images/projects/portfolio.png";
import todos from "./images/projects/todos.png";


export const projectData = [
  {
    title: "Netflix",
    description: `It is a clone of Netflix's web interface. This app was created using React 
    functional components, Redux state management, axios async/await requests, and deployed on Google Firebase. 
    Firebase Authentication allows user account creation. Additional functionality includes customer subscription checkout powered by 
    Stripe API integration. Once a user is subscribed, movie data is pulled 
    from The Movie Database (TMDB) for trending movies and movie poster images. Movie trailers are integrated 
    from YouTube if one is successfully found.`,
    warning: `The site is not mobile responsive.`,
    technologies:
      "React, Redux, Stripe API, Firebase Authentication, JavaScript, HTML, CSS, GitHub",
    image: netflix,
    date_created: "January 2021",
    link: "https://netflix-clone-e4e6d.web.app/",
    github: "https://github.com/rj2704/netflix-clone",
    test_user: "test@test.com",
    test_password: "abcd1234",
    cc: {
      number: "5555 5555 5555 4444",
      expiration: "09/22",
      cvv: "123",
      billing: "Anything",
    },
  },
  
  {
    title: "Portfolio",
    description: `This portfolio was created using React. The inspiration for the theme 
        was based on 80's retro arcade games. The site is mobile and desktop responsive, with 
        additional functionality including an app-wide music player that is saved in the app state. `,
    technologies: "React, JavaScript, HTML, CSS, GitHub, Netlify",
    warning: `---`,
    image: portfolio,
    date_created: "March 2021",
    link: "https://jigarrathod.netlify.app/",
    github: "https://github.com/rj2704/portfolio",
  },

  {
    title: "Memories",
    description: `This is a MERN project. It is a simple social media MERN application 
          that allows users to post interesting events that happened in their lives.`,
    warning: `---`,
    technologies:
      "React, Node.js, Express, MongoDB, JavaScript, HTML, CSS, Heroku, Netlify",
    image: memories,
    date_created: "February 2021",
    link: "https://memories-create.netlify.app/",
    github: "https://github.com/rj2704",
  },

  {
    title: "E-commerce",
    description: `It is an e-commerce website where user can purchase multiple products. This app was created using React, React hooks, Redux state management, React router, and deployed on Google Firebase. Firebase Authentication allows user account creation. Additional functionality includes customer cart checkout powered by Stripe API integration.`,
    warning: `The site is not mobile responsive.`,
    technologies:
      "React, React-Hooks, Redux, React-Router, Stripe API, Firebase Authentication, JavaScript, HTML, CSS, GitHub",
    image: commerce,
    date_created: "January 2021",
    link: "https://shoppers-point-20bd3.web.app/",
    github: "https://github.com/rj2704/e-commerce-site",
    test_user: "test@test.com",
    test_password: "abcd1234",
    cc: {
      number: "5555 5555 5555 4444",
      expiration: "09/22",
      cvv: "123",
      billing: "Anything",
    },
  },
  
 
  {
    title: "Todos",
    description: `This single-page to-do application features a
        fluid user interface that allows users to rapidly add dynamic content
        and create to-do lists.`,
    warning: `The site is not mobile responsive.`,
    technologies:
      "React, JavaScript, CSS, HTML, GitHub, Heroku",
    image: todos,
    date_created: "February 2020",
    link: "https://react-todoist.herokuapp.com/",
    github: "https://github.com/rj2704/react-todo",
  },
];
