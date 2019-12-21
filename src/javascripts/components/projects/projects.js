import utilities from '../../helpers/utilities';
import projectsData from '../../helpers/data/projectsData';

const createProjectCards = () => {
  let domString = '<div class="container">';
  domString = '<div class="row">';
  projectsData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `
        <div class="card-body col-md-4 projectCard border-dark mb-3">
            <h3>${project.name}</h3>
            <a href="${project.url}">Look at this</a>
            <p>${project.description}</p>
            <p>${project.technologiesUsed}</p>
            <a href="${project.url}">Click here!</a>
            <a href="${project.gitHubUrl}">Check out my Git Hub</a>
        </div>
        `;
      });
      domString += '</div></div>';
      utilities.printToDOM(domString, 'projectsPage');
    })
    .catch((error) => console.error(error));
};

export default { createProjectCards };
