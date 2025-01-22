const dinoHTML = (dinoData) => {
  let html = dinoData.map((dinoObj) => {
    return `
      <div class=dino-card">
        <h3>${dinoObj.name}</h3>
        <span>${dinoObj.height}</span>
        <span>${dinoObj.weight}</span>
        <span>${dinoObj.diet}</span>
        <span>${dinoObj.favoriteThing}</span>
      </div>
    `
  })

  return html
}

const statContainer = document.querySelector("#dino-stats")

statContainer.innerHTML = dinoHTML()
