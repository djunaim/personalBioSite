import './homePage.scss';
import utilities from '../../helpers/utilities';

const printHomePage = () => {
  const domString = `
    <div class="row" id="bio">Bio</div>
    <div class="row" id="technologies">Technologies</div>
    <div class="row" id="projects">Projects</div>
  `;
  utilities.printToDOM(domString, 'homePage');
};

export default { printHomePage };
