let delay = -0.3

function createGame(p1, p2, hour) {
  return `
    <li>
      <img src="./assets/icon-${p1}.svg" alt="${p1} flag" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${p2}.svg" alt="${p2} flag" />
    </li>
  `
}

function createCard(date, day, games) {
  delay += 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>

        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11", "quinta", createGame()) +
    createCard("28/11", "segunda") +
    createCard("02/12", "sexta")

