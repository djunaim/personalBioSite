import utilities from '../../helpers/utilities';
import projectsData from '../../helpers/data/projectsData';
import './projects.scss';

const createProjectCards = () => {
  let domString = '<div id="projectContainer">';
  domString = '<div class="row">';
  projectsData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `
        <div class="card-body col-md-3 col-sm-3 projectCard">
            <h3>${project.name}</h3>
            <img class="projectImage" src="${project.img}"/>
          <div class="overlay">
            <a href="${project.url}"><i class="fa fa-link fa-3x"></i></a>
            <a href="${project.gitHubUrl}"><i class="fa fa-github fa-3x"></i></a>
          </div>
        </div>
        `;
      });
      domString += '</div></div>';
      utilities.printToDOM(domString, 'projectsPage');
    })
    .catch((error) => console.error(error));
};

export default { createProjectCards };
