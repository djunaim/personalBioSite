import $ from 'jquery';

const navClick = (e) => {
  const section = $('ul.li a').attr('href');
  $('html, body').stop().animate({ scrollTop: $(section).offset().top }, 1500);
  e.preventDefault();
};

const clickEvents = () => {
  $('#navToHome').on('click', navClick);
  $('#navToBio').on('click', navClick);
  $('#navToTechnologies').on('click', navClick);
  $('#navToProjects').on('click', navClick);
};

export default { clickEvents };
