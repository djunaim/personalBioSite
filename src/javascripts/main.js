import '../styles/main.scss';
import 'bootstrap';

import projects from './components/projects/projects';

const init = () => {
  projects.createProjectCards();
};

init();
