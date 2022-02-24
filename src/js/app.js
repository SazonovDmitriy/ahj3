document.addEventListener('DOMContentLoaded', () => {
  const cells = document.getElementsByTagName('td');
  let selectedCellIndex = 0;
  let newCellIndex = 0;
  let score = 0;

  function getRandom(cellsArr) {
    const number = Math.floor(Math.random() * cellsArr.length);
    return number;
  }

  // eslint-disable-next-line consistent-return
  setInterval(() => {
    while (selectedCellIndex === newCellIndex) {
      selectedCellIndex = getRandom(cells);
      score += 1;
      if (score === 5) {
        score += 1;
        // eslint-disable-next-line no-alert
        alert('Game over');
        // eslint-disable-next-line no-return-assign
        return score = 0;
      }
    }

    if (newCellIndex >= 0) {
      cells[newCellIndex].innerHTML = '';
    }

    cells[selectedCellIndex].innerHTML = '<img src="https://raw.githubusercontent.com/netology-code/ahj-homeworks/master/dom/pic/goblin.png">';
    newCellIndex = selectedCellIndex;
    cells[selectedCellIndex].addEventListener('click', () => {
      score = 0;
    });
  }, 1000);
});
