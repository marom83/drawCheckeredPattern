$(function() {
    canvas = document.getElementById("MyCanvas");
    context = canvas.getContext("2d");
     var squareSize = canvas.width/8;
    
    function drawCheckeredPattern(row, col) {
       function drawQuare(row, col) {
        context.fillRect(row * squareSize, col * squareSize, squareSize, squareSize);
      }
       for (row = 0; row < 8; row++) {
        for (col = 0; col < 8; col++) {
          if (row % 2 == 0 && col % 2 == 1) {
            drawQuare(row, col);
          }
          if (row % 2 == 1 && col % 2 == 0) {
            drawQuare(row, col);
          }
        }
      }
    }
    drawCheckeredPattern(8, 8);
  });