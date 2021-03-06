// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Nicole",
  middleName: "",
  lastName: "Frontero",
  message: " Passionate about improving healthcare through statistics and data science. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nfrontero20",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nicolefrontero/",
    },
    {
      image: "fab fa-researchgate",
      url: "https://www.researchgate.net/profile/Nicole_Frontero",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/profile-picture.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile-picture.png"),
  imageSize: 375,
  message:
    "Hi! My name is Nicole Frontero. I graduated in December 2020 from Amherst College with degrees in Statistics and Psychology. I’m passionate about making a difference in the lives of others through advancing healthcare. My goal is to pursue this passion by tackling difficult science and health concerns using statistics and data science.",
    
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "nfrontero20", //i.e."johnDoe12Gh"
  reposLength: 8,
  specificRepos: [],
};

// EXPERIENCE SECTION
const experience = {
  show: true,
  heading: "Experience",
  message:
    "I'm fortunate to have had the opportunity to intern and do research with scientists in domains such as cognitive psychology, clinical psychology, and public health.",
  images: [
    { 
      img: require("../editable-stuff/Amherst-College-logo.png"), 
      label: "Psychology Research Assistant", 
      paragraph: "September 2018 - December 2019" 
    },
    { 
      img: require("../editable-stuff/McLean-hospital-logo.png"), 
      label: "Data Science Intern", 
      paragraph: "June 2019 - July 2019" 
    },
    { 
      img: require("../editable-stuff/McLean-hospital-logo.png"), 
      label: "Clinical Research Intern", 
      paragraph: "June 2018 - August 2018" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};


// PUBLICATIONS SECTION
const publications = {
  show: true,
  heading: "Publications",
  message:
    "Add message if you want",
  images: [
    { 
      img: require("../editable-stuff/Brain-logo.png"), 
      label: "Disentangling vulnerability, state and trait features of neurocognitive impairments in depression", 
      paragraph: "As a Data Science Intern at McLean Hospital, I contributed to a project studying the XX.  I prepared the data set for analysis by transforming the raw data from the National Institute of Mental Health into a clean and organized format.  The results of the project are now published in Oxford Academy's Brain: A Journal of Neurology." 
    },
    { 
      img: require("../editable-stuff/Brain-logo.png"), 
      label: "Characterizing a snapshot of perceptual experience", 
      paragraph: "I engaged in an independent study course which involved serving as a research assistant in Professor Michael Cohen's lab (Amherst College).  I participated in study design, recruited participants, and collected data through guiding participants through experimental paradigm.  I also presented at the 2019 Vision Sciences Society Conference.  The results from our research has been published in the American Psychology Association's Journal of Experimental Psychology: General." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};


// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Statistician or Data Science opportunities in the healthcare space! If you know of any positions available, have any questions, or just want to say hi, please feel free to email me at:",
  email: "nicolefrontero@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, experience, skills, leadership, publications, getInTouch };
