window.addEventListener('load', function () {
    var speed = 10,
    direction = 1;
    var boxElement = document.getElementById('Player');

    if (boxElement) {
        boxElement.addEventListener('mouseover', function () {
            var boxLeftPos = boxElement.offsetLeft,
                boxRightPos = boxLeftPos + boxElement.offsetWidth;
            if (boxRightPos > document.body.offsetWidth) {
                direction = -1;
            }
            // When left side of the box goes too far - change direction:
            if (boxLeftPos < 0) {
                direction = 1;
            }
            boxElement.style.left = (boxLeftPos + speed * direction) + 'px';
        });
    }
});

    window.addEventListener('keydown', (event) => {
      if (event.key == 'w') {
        event.preventDefault();
        console.log(event)
        console.log("You Pressed W")
      }
})
