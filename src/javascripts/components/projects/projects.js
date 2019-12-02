import utilities from '../../helpers/utilities';
import projectsData from '../../helpers/data/projectsData';

const createProjectCards = () => {
  let domString = '<div>';
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
      domString += '</div>';
      utilities.printToDOM(domString, 'projectsPage');
    })
    .catch((error) => console.error(error));
};

const hidden = () => {
  document.getElementById('bioPage').style.display = 'none';
  document.getElementById('technologiesPage').style.display = 'none';
  document.getElementById('projectsPage').style.display = 'none';
};

hidden();

const navClick = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'navToBio') {
    document.getElementById('bioPage').style.display = 'block';
    document.getElementById('technologiesPage').style.display = 'none';
    document.getElementById('projectsPage').style.display = 'none';
  } else if (buttonID === 'navToTechnologies') {
    document.getElementById('bioPage').style.display = 'none';
    document.getElementById('technologiesPage').style.display = 'block';
    document.getElementById('projectsPage').style.display = 'none';
  } else if (buttonID === 'navToProjects') {
    document.getElementById('bioPage').style.display = 'none';
    document.getElementById('technologiesPage').style.display = 'none';
    document.getElementById('projectsPage').style.display = 'block';
  }
};

document.getElementById('navToBio').addEventListener('click', navClick);
document.getElementById('navToTechnologies').addEventListener('click', navClick);
document.getElementById('navToProjects').addEventListener('click', navClick);

export default { createProjectCards };
