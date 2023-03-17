let reset = function () {
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");

  let mouseX;
  let mouseY;

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const maxRadius = 55;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  class Circle {
    constructor(xCoordinate, yCoordinate, radius) {
      const randomNumber = Math.floor(Math.random() * 20);
      const randomTrueOrFalse = Math.floor(Math.random() * 4);

      this.xCoordinate = xCoordinate;
      this.yCoordinate = yCoordinate;
      this.radius = radius / 6;
      this.color = colorArray[randomNumber];

      if (randomTrueOrFalse == 1) {
        this.xVelocity = -Math.random() * 0.5;
      } else {
        this.xVelocity = Math.random() * 0.5;
      }

      if (randomTrueOrFalse == 1) {
        this.yVelocity = -Math.random() * 0.5;
      } else {
        this.yVelocity = Math.random() * 0.5;
      }

      this.update = function () {
        this.xCoordinate += this.xVelocity;
        const xDistance = mouseX - this.xCoordinate;
        const yDistance = mouseY - this.yCoordinate;
        const originalRadius = radius / 4;
        this.yCoordinate += this.yVelocity;

        this.draw();
      };

      this.draw = function () {
        c.beginPath();
        c.arc(
          this.xCoordinate,
          this.yCoordinate,
          Math.abs(this.radius),
          0,
          Math.PI * 4
        );
        c.fillStyle = this.color;
        c.fill();
      };
    }
  }

  const colorArray = [
    "rgba(226,230,227, 0.3)",
    "rgba(29,32,29,0.5)",
    "rgba(23,22,19,0.5)",
    "rgba(136,182,178.03)",
    "rgba(126,126,120,0.3)",
    "rgba(131,152,159, 0.3)",
    "rgba(247,246,247,0.3)",

    "rgba(226,230,227, 0.3)",
    "rgba(29,32,29,0.5)",
    "rgba(23,22,19,0.5)",
    "rgba(136,182,178.03)",
    "rgba(126,126,120,0.3)",
    "rgba(131,152,159,0.7)",
    "rgba(247,246,247,0.5)",

    "rgba(54,219,236,0.3)",
    "rgba(190,96,39,0.3)",

    "rgba(76,121,113,0.3)",
    "rgba(84,80,74,0.3)",
    "rgb(77,95,103, 0.3)",
    "rgba(51,77,69,0.3)",
  ];
  const myCircle = new Circle(30, 80, 10);
  let circleArray = [];

  for (let i = 0; i < 8000; i++) {
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const rndInt = randomIntFromInterval(Math.cos(2) + Math.cos(20));

    const randomXCoordinate = Math.random() * canvasWidth;
    const randomYCoordinate = Math.random() * canvasHeight;
    const randomRadius = Math.random() * 12;
    circleArray.push(
      new Circle(randomXCoordinate, randomYCoordinate, randomRadius)
    );
  }

  function updateAll() {
    myCircle.update();
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
    window.requestAnimationFrame(updateAll);
  }
  updateAll();
};

document.getElementById("button").addEventListener("click", reset);
