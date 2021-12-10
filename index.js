var Player = document.getElementById("Player")

function movePlayerLeft() {
  var leftNumbers = Player.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

window.addEventListener('keydown', (event) => {
      if (event.key == 'w') {
        movePlayerLeft()
      }
})
