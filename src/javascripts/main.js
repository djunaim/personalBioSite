import '../styles/main.scss';
import 'bootstrap';

import projects from './components/projects/projects';
// import homepage from './components/homePage/homePage';
// import navbar from './components/navbar/navbar';

const init = () => {
  // homepage.printHomePage();
  // navbar.hidden();
  // navbar.clickEvents();
  projects.createProjectCards();
};

init();
