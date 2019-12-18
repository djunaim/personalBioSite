const hidden = () => {
  document.getElementById('bioPage').style.display = 'none';
  document.getElementById('technologiesPage').style.display = 'none';
  document.getElementById('projectsPage').style.display = 'none';
};

const navClick = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'navToHome') {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('bioPage').style.display = 'none';
    document.getElementById('technologiesPage').style.display = 'none';
    document.getElementById('projectsPage').style.display = 'none';
  } else if (buttonID === 'navToBio') {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('bioPage').style.display = 'block';
    document.getElementById('technologiesPage').style.display = 'none';
    document.getElementById('projectsPage').style.display = 'none';
  } else if (buttonID === 'navToTechnologies') {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('bioPage').style.display = 'none';
    document.getElementById('technologiesPage').style.display = 'block';
    document.getElementById('projectsPage').style.display = 'none';
  } else if (buttonID === 'navToProjects') {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('bioPage').style.display = 'none';
    document.getElementById('technologiesPage').style.display = 'none';
    document.getElementById('projectsPage').style.display = 'block';
  }
};

const clickEvents = () => {
  document.getElementById('navToHome').addEventListener('click', navClick);
  document.getElementById('navToBio').addEventListener('click', navClick);
  document.getElementById('navToTechnologies').addEventListener('click', navClick);
  document.getElementById('navToProjects').addEventListener('click', navClick);
};

export default { hidden, clickEvents };
