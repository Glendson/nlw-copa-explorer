let delay = -0.3

function createGame(p1, p2, hour) {
  return `
    <li>
      <img src="./assets/flag/icon=${p1}.svg" alt="${p1} flag" />
      <strong>${hour}</strong>
      <img src="./assets/flag/icon=${p2}.svg" alt="${p2} flag" />
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
  createCard("24/11", "quinta", createGame("brazil", "serbia", "19:00")) +
  createCard("28/11", "segunda", createGame("brazil", "switzerland", "16:00")) +
  createCard("02/12", "sexta", createGame("brazil", "cameroon", "19:00"))

