const color = [
  "magenta",
  "mediumPurple",
  "slateBlue",
  "springgreen",
  "seagreen",
  "mediumaquamarine",
  "lightseagreen",
  "teal",
  "mediumturquoise",
  "steelblue",
  "cornflowerblue",
];

const game_area = document.querySelector("#game");
function create_Ball() {

  let size = Math.floor(Math.random() * 60);
  const ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.width = 25 + size + "px";
  ball.style.height = 25 + size + "px";
  ball.style.left = Math.random() * innerWidth + "px";
  ball.style.bottom ="-20px"
  ball.textContent = Math.floor(Math.random() * 10);
  ball.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
  game_area.appendChild(ball);

  setTimeout(() => {
    ball.remove();
  }, 5000);
}

setInterval(create_Ball,400)
