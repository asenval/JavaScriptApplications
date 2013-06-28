module("MovingGameObject.init");
test("should set correct values",   
  function(){
    var position = {x: 150, y: 150}, size = 15, speed = 5, fcolor = "#000000", scolor = "#000000", dir = 0;
    var movingGameObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    equal(movingGameObject.position, position)
    equal(movingGameObject.size, size);
    equal(movingGameObject.fcolor, fcolor);
    equal(movingGameObject.scolor, scolor);
    equal(movingGameObject.speed, speed);
    equal(movingGameObject.direction, dir);
  });

var TestMovingGameObjectMove = (function () {
    module("MovingGameObject.move");

    var movingGameObject;
    var position, size, speed, fcolor, scolor, dir;
    QUnit.testStart(function (){
        position = { x: 150, y: 150 }, size = 15, speed = 5, fcolor = "#000000", scolor = "#000000", dir = 0;
        movingGameObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, dir);
    });
    test("When direction is 0, decrease x",
      function () {
          movingGameObject.direction = 0;
          movingGameObject.move();
          position.x - speed;
          deepEqual(movingGameObject.position, position);
      });
    test("When  direction is 1, decrease update y",
      function () {
          movingGameObject.direction = 1;
          movingGameObject.move();
          position.y - speed;
          deepEqual(movingGameObject.position, position);
      });
    test("When  direction is 2, increase x",
      function () {
          movingGameObject.direction = 2;
          movingGameObject.move();
          position.x + speed;
          deepEqual(movingGameObject.position, position);
      });
    test("When  direction is 3, should increase x",
      function () {
          movingGameObject.direction = 3;
          movingGameObject.move();
          position.y + speed;
          deepEqual(movingGameObject.position, position);
      });

    QUnit.testStart(function () { });

})();

var TestMovignGameObjectChangeDirection = (function () {
    module("MovingGameObject.changeDirection");

    var movingGameObject;
    var position, size, speed, fcolor, scolor, direction;
    QUnit.testStart(function () {
        position = { x: 150, y: 150 }, size = 15, speed = 5, fcolor = "#000000", scolor = "#000000", direction = 0;
        movingGameObject = new snakeGame.MovingGameObject(position, size, fcolor, scolor, speed, direction);
    });
    test("When direction is 0, try change it to 0",
      function () {
          var oldDirection = 0;
          movingGameObject.direction = oldDirection;
          var newDirection = 0;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, oldDirection);
      });
    test("When direction is 0, try change it to 1",
      function () {
          var oldDirection = 0;
          movingGameObject.direction = oldDirection;
          var newDirection = 1;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, newDirection);
      });
    test("When direction is 0, try change it to 2",
      function () {
          var oldDirection = 0;
          movingGameObject.direction = oldDirection;
          var newDirection = 2;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, oldDirection);
      });
    test("When direction is 0, try change it to 3",
      function () {
          var oldDirection = 0;
          movingGameObject.direction = oldDirection;
          var newDirection = 3;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, newDirection);
      });

    test("When direction is 1, try change it to 0",
      function () {
          var oldDirection = 1;
          movingGameObject.direction = oldDirection;
          var newDirection = 0;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, newDirection);
      });
    test("When direction is 1, try change it to 1",
      function () {
          var oldDirection = 1;
          movingGameObject.direction = oldDirection;
          var newDirection = 1;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, oldDirection);
      });
    test("When direction is 1, try change it to 2",
      function () {
          var oldDirection = 1;
          movingGameObject.direction = oldDirection;
          var newDirection = 2;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, newDirection);
      });
    test("When direction is 1, try change it to 3",
      function () {
          var oldDirection = 1;
          movingGameObject.direction = oldDirection;
          var newDirection = 3;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, oldDirection);
      });

    test("When direction is 2, try change it to 0",
      function () {
          var oldDirection = 2;
          movingGameObject.direction = oldDirection;
          var newDirection = 0;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, oldDirection);
      });
    test("When direction is 2, try change it to 1",
      function () {
          var oldDirection = 2;
          movingGameObject.direction = oldDirection;
          var newDirection = 1;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, newDirection);
      });
    test("When direction is 2, try change it to 2",
      function () {
          var oldDirection = 2;
          movingGameObject.direction = oldDirection;
          var newDirection = 2;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, oldDirection);
      });
    test("When direction is 2, try change it to 3",
      function () {
          var oldDirection = 2;
          movingGameObject.direction = oldDirection;
          var newDirection = 3;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, newDirection);
      });

    test("When direction is 3, try change it to 0",
      function () {
          var oldDirection = 3;
          movingGameObject.direction = oldDirection;
          var newDirection = 0;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, newDirection);
      });
    test("When direction is 3, try change it to 1",
      function () {
          var oldDirection = 3;
          movingGameObject.direction = oldDirection;
          var newDirection = 1;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, oldDirection);
      });
    test("When direction is 3, try change it to 2",
      function () {
          var oldDirection = 3;
          movingGameObject.direction = oldDirection;
          var newDirection = 2;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, newDirection);
      });
    test("When direction is 3, try change it to 3",
      function () {
          var oldDirection = 3;
          movingGameObject.direction = oldDirection;
          var newDirection = 3;
          movingGameObject.changeDirection(newDirection);
          equal(movingGameObject.direction, oldDirection);
      });

    QUnit.testStart(function () { });
})();