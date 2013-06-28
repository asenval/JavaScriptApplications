/// <reference path="../scripts/snake.js" />

module("SnakeGame.checkCollisions");
var TestMovingGameObjectMove = (function () {
   

    var movingGameObject;
    var position, speed, direction, snake;
    QUnit.testStart(function () {
        position = { x: 150, y: 150 }, speed = 15, direction = 0;
        snake = new snakeGame.Snake(position, speed, direction);

    });
    test("When snake eats itself",
      function () {
          var piece = snake.pieces[2];
          snake.consume(piece);
          var isDead = false;
          snake.addDieHandler(function () {
              isDead = true;
          });
          equal(isDead, 0);
      });    

    QUnit.testStart(function () { });

})();