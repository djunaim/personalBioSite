import '../styles/main.scss';

const PrintToDOM = (toPrint, divID) => {
  document.getElementById(divID).innerHTML = toPrint;
};

const projects = [
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  }];

const createProjectCards = (stuff) => {
  let domString = '';
  for (let i = 0; i < stuff.length; i += 1) {
    const singleThing = stuff[i];
    if (singleThing.available === true) {
      domString += `
    <div class='projectCard'>
        <h3>${singleThing.title}</h3>
        <a href="${singleThing.screenshot}">Look at this</a>
        <p>${singleThing.description}</p>
        <p>${singleThing.technologiesUsed}</p>
        <a href="${singleThing.url}">Click here!</a>
        <a href="${singleThing.githubUrl}">Check out my Git Hub</a>
    </div>
    `;
      PrintToDOM(domString, 'projectsPage');
    }
  }
};

createProjectCards(projects);

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
