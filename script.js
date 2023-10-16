const components = [
    {
      title: "rock",
      ring_img: "./imgs/cblue.png",
      hand_img: "./imgs/stone.png",
    },
    {
      title: "scissor",
      ring_img: "./imgs/cpurp.png",
      hand_img: "./imgs/scissors.png",
    },
    {
      title: "paper",
      ring_img: "./imgs/cyellow.png",
      hand_img: "./imgs/paper.png",
    },
  ];
  
  const gameArea = document.querySelector(".gameArea");
  const rockBtn = document.querySelector(".rockBtn");
  const scissorBtn = document.querySelector(".scissorBtn");
  const paperBtn = document.querySelector(".paperBtn");
  const playerOptions = [rockBtn, scissorBtn, paperBtn];
  const result = document.querySelector(".result");
  const computerScoreElement = document.querySelector(".c-count");
  const playerScoreElement = document.querySelector(".p-count");
  const rulesBox = document.querySelector(".gameRules");
  const rules = document.querySelector(".rules");
  const nextBtn = document.querySelector(".nextBtn");
  const play = document.querySelector(".play");
  const rulesCloseBtn = document.querySelector(".close-btn");
  
  let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
  let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
  
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  
  playerOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      const playerChoice = e.currentTarget.dataset.id;
  
      const computerHands = components;
      let randomBot =
        computerHands[Math.floor(Math.random() * computerHands.length)];
      let randomBotChoice = randomBot.title;
  
      winner(playerChoice, randomBotChoice);
    });
  });
  
  const winner = (player, computer) => {
    if (player == "rock") {
      if (computer == "paper") {
        gameArea.innerHTML = `<div class="result-frame">
        <div class="disc1">
          <div class="disc color">
            <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[0].hand_img}" alt="stone-hand">
          </div>
        </div>
        <div class="box1">
          <h2>you lost</h2>
          <h3>against pc</h3>
          <button class="playAgain" onclick="window.location.reload()">play again</button>
        </div>
        <div class="disc2">
          <div class="ripple-effect">
            <div class="round circle1"></div>
            <div class="round circle2"></div>
            <div class="round circle3"></div>
            <div class="round circle4"></div>
          </div>
          <div class="disc color">
            <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[2].hand_img}" alt="paper-hand">
          </div>
        </div>
        <p class="playerPick">you picked</p>
        <p class="computerPick">pc picked</p>
      </div>`;
        computerScore++;
      } else if (computer == "scissor") {
        gameArea.innerHTML = `<div class="result-frame">
        <div class="disc1">
          <div class="ripple-effect">
            <div class="round circle1"></div>
            <div class="round circle2"></div>
            <div class="round circle3"></div>
            <div class="round circle4"></div>
          </div>
          <div class="disc color">
            <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[0].hand_img}" alt="stone-hand">
          </div>
        </div>
        <div class="box1">
          <h2>you win</h2>
          <h3>against pc</h3>
          <button class="playAgain" onclick="window.location.reload()">play again</button>
        </div>
        <div class="disc2">
          <div class="disc color">
            <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[1].hand_img}" alt="scissor-hand">
          </div>
        </div>
        <p class="playerPick">you picked</p>
        <p class="computerPick">pc picked</p>
      </div>`;
        showNextBtn();
        playerScore++;
      } else {
        gameArea.innerHTML = `<div class="result-frame">
        <div class="disc1">
          <div class="disc color">
            <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[0].hand_img}" alt="stone-hand">
          </div>
        </div>
        <div class="box1">
          <h2>tie up</h2>
          <button class="playAgain" onclick="window.location.reload()">replay</button>
        </div>
        <div class="disc2">
          <div class="disc color">
            <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[0].hand_img}" alt="stone-hand">
          </div>
        </div>
        <p class="playerPick">you picked</p>
        <p class="computerPick">pc picked</p>
      </div>`;
      }
    } else if (player == "scissor") {
      if (computer == "paper") {
        gameArea.innerHTML = `<div class="result-frame">
        <div class="disc1">
          <div class="ripple-effect">
            <div class="round circle1"></div>
            <div class="round circle2"></div>
            <div class="round circle3"></div>
            <div class="round circle4"></div>
          </div>
          <div class="disc color">
            <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[1].hand_img}" alt="scissor-hand">
          </div>
        </div>
        <div class="box1">
          <h2>you win</h2>
          <h3>against pc</h3>
          <button class="playAgain" onclick="window.location.reload()">play again</button>
        </div>
        <div class="disc2">
          <div class="disc color">
            <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[2].hand_img}" alt="paper-hand">
          </div>
        </div>
        <p class="playerPick">you picked</p>
        <p class="computerPick">pc picked</p>
      </div>`;
        showNextBtn();
        playerScore++;
      } else if (computer == "rock") {
        gameArea.innerHTML = `<div class="result-frame">
        <div class="disc1">
          <div class="disc color">
            <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[1].hand_img}" alt="scissor-hand">
          </div>
        </div>
        <div class="box1">
          <h2>you lost</h2>
          <h3>against pc</h3>
          <button class="playAgain" onclick="window.location.reload()">play again</button>
        </div>
        <div class="disc2">
          <div class="ripple-effect">
            <div class="round circle1"></div>
            <div class="round circle2"></div>
            <div class="round circle3"></div>
            <div class="round circle4"></div>
          </div>
          <div class="disc color">
            <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[0].hand_img}" alt="stone-hand">
          </div>
        </div>
        <p class="playerPick">you picked</p>
        <p class="computerPick">pc picked</p>
      </div>`;
        computerScore++;
      } else {
        gameArea.innerHTML = `<div class="result-frame">
        <div class="disc1">
          <div class="disc color">
            <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[1].hand_img}" alt="scissor-hand">
          </div>
        </div>
        <div class="box1">
          <h2>tie up</h2>
          <button class="playAgain" onclick="window.location.reload()">replay</button>
        </div>
        <div class="disc2">
          <div class="disc color">
            <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[1].hand_img}" alt="scissor-hand">
          </div>
        </div>
        <p class="playerPick">you picked</p>
        <p class="computerPick">pc picked</p>
      </div>`;
      }
    } else if (player == "paper") {
      if (computer == "rock") {
        gameArea.innerHTML = `<div class="result-frame">
        <div class="disc1">
          <div class="ripple-effect">
            <div class="round circle1"></div>
            <div class="round circle2"></div>
            <div class="round circle3"></div>
            <div class="round circle4"></div>
          </div>
          <div class="disc color">
            <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[2].hand_img}" alt="paper-hand">
          </div>
        </div>
        <div class="box1">
          <h2>you win</h2>
          <h3>against pc</h3>
          <button class="playAgain" onclick="window.location.reload()">play again</button>
        </div>
        <div class="disc2">
          <div class="disc color">
            <img src="${components[0].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[0].hand_img}" alt="stone-hand">
          </div>
        </div>
        <p class="playerPick">you picked</p>
        <p class="computerPick">pc picked</p>
      </div>`;
        showNextBtn();
        playerScore++;
      } else if (computer == "scissor") {
        gameArea.innerHTML = `<div class="result-frame">
        <div class="disc1">
          <div class="disc color">
            <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[2].hand_img}" alt="paper-hand">
          </div>
        </div>
        <div class="box1">
          <h2>you lost</h2>
          <h3>against pc</h3>
          <button class="playAgain" onclick="window.location.reload()">play again</button>
        </div>
        <div class="disc2">
          <div class="ripple-effect">
            <div class="round circle1"></div>
            <div class="round circle2"></div>
            <div class="round circle3"></div>
            <div class="round circle4"></div>
          </div>
          <div class="disc color">
            <img src="${components[1].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[1].hand_img}" alt="scissor-hand">
          </div>
        </div>
        <p class="playerPick">you picked</p>
        <p class="computerPick">pc picked</p>
      </div>`;
        computerScore++;
      } else {
        gameArea.innerHTML = `<div class="result-frame">
        <div class="disc1">
          <div class="disc color">
            <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[2].hand_img}" alt="paper-hand">
          </div>
        </div>
        <div class="box1">
          <h2>tie up</h2>
          <button class="playAgain" onclick="window.location.reload()">replay</button>
        </div>
        <div class="disc2">
          <div class="disc color">
            <img src="${components[2].ring_img}" class="circle" alt="Circle Image" />
          </div>
          <div class="disc white">
            <img src="${components[2].hand_img}" alt="paper-hand">
          </div>
        </div>
        <p class="playerPick">you picked</p>
        <p class="computerPick">pc picked</p>
      </div>`;
      }
    }
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    localStorage.setItem("playerScore", playerScore);
    localStorage.setItem("computerScore", computerScore);
  };
  
  rules.addEventListener("click", () => {
    rulesBox.classList.toggle("gameRulesBox");
  });
  
  rulesCloseBtn.addEventListener("click", () => {
    rulesBox.classList.add("gameRulesBox");
  });
  
  const showNextBtn = () => {
    nextBtn.classList.remove("nextBtnRemove");
    nextBtn.addEventListener("click", () => {
      play.innerHTML = `<div class="hurray-frame">
      <div class="hurray-imgs">
        <img src="imgs/starts.png" alt="stars">
        <img class="trophy" src="imgs/Vector.png" alt="trophy">
      </div>
      <h1>hurray!!</h1>
      <h3>you won the game</h3>
      <button class="playAgain hurrayPlayBtn" onclick="window.location.reload()">play again</button>
    </div>`;
      nextBtn.classList.add("nextBtnRemove");
    });
  };