import utilities from '../../helpers/utilities';
import projectsData from '../../helpers/data/projectsData';

const createProjectCards = () => {
  let domString = '<div class="container" id="projectContainer">';
  domString = '<div class="row">';
  projectsData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `
        <div class="card-body col-md-4 projectCard border-dark mb-3">
            <h3>${project.name}</h3>
            <img id="projectImage" src=${project.img}/>
            <div id="overlay">
              <a href="${project.url}">Click here!</a>
              <a href="${project.gitHubUrl}">Check out my Git Hub</a>
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
