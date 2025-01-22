import { getDinosaurs } from "./database.js"

const dinoArray = getDinosaurs()

const dinoHTML = (dinoData) => {
  let html = dinoData.map((dinoObj) => {
    return `
      <div class="dino-data-card">
        <h3>${dinoObj.name}</h3>
        <ul>
          <li>Height: ${dinoObj.height}</li>
          <li>Weight: ${dinoObj.weight}</li>
          <li>Diet: ${dinoObj.diet}</li>
          <li>Favorite thing: ${dinoObj.favoriteThing}</li>
        </ul>
      </div>
    `
  })

  return html.join("")
}

const statContainer = document.querySelector("#dino-stats-container")

statContainer.innerHTML = dinoHTML(dinoArray)
