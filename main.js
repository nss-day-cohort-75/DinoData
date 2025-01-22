import { getDinosaurs } from "./database.js"

const dinoArray = getDinosaurs()

const dinoHTML = (dinoData) => {
  let html = dinoData.map((dinoObj) => {
    return `
      <div class="dino-card-wrapper">
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

const statContainer = document.querySelector("#dino-stats")

statContainer.innerHTML = dinoHTML(dinoArray)
