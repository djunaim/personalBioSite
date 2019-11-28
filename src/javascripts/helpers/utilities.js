const printToDOM = (toPrint, divID) => {
  document.getElementById(divID).innerHTML = toPrint;
};

export default { printToDOM };
