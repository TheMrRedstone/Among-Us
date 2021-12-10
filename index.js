window.addEventListener('keydown', (event) => {
  if (event.key == 'w') {
    event.preventDefault();
    console.log(event)
    console.log("You Pressed W")
    alert("Moving Char")
  }
})
