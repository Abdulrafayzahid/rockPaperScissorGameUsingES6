console.log("The Game has Started!!!!!!!!!");

let userScore = 0;
let compScore = 0;

// Cache the DOM

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

console.log(result_p.innerHTML);
const getCompChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  const choices = ["p", "r", "s"];
  return choices[choice];
};

function convertToWord(user) {
  if (user === "r") {
    return "Rock";
  }
  if (user === "p") {
    return "Paper";
  }
   else return "Scissor";
}

function win(user, computer) {
  const smallUserWord = 'user'.fontsize(3).fontcolor('blue').sub();
  const smallCompWord = 'comp'.fontsize(3).fontcolor('red').sub();
  const userChoice = document.getElementById(user);
  userScore++;
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = ` ${convertToWord(user)}${smallUserWord} Beats ${convertToWord(computer)}${smallCompWord} You Win! 🔥 🔥`;
  userChoice.classList.add('win-border')
  setTimeout(() => {
    userChoice.classList.remove('win-border')    
}, 500);
}

function lose(user, computer) {
  const userChoice = document.getElementById(user);
  compScore++;
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = 'user'.fontsize(3).fontcolor('red').sub();
  const smallCompWord = 'comp'.fontsize(3).fontcolor('blue').sub();
  result_p.innerHTML = ` ${convertToWord(user)}${smallUserWord} losses to ${convertToWord(computer)}${smallCompWord} You Lost.. 😫`;
  userChoice.classList.add('lose-border')
  setTimeout(() => {
    userChoice.classList.remove('lose-border')    
}, 500);
}

const draw = (user, computer) => {
  const userChoice = document.getElementById(user);
    compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
    const smallUserWord = 'user'.fontsize(3).fontcolor('red').sub();
    const smallCompWord = 'comp'.fontsize(3).fontcolor('red').sub();

    result_p.innerHTML = ` ${convertToWord(user)}${smallUserWord}  Equals  ${convertToWord(computer)}${smallCompWord} It's Draw`;
    userChoice.classList.add('draw-border') 
    setTimeout(() => {
        userChoice.classList.remove('draw-border')    
    }, 500);
    
  }
const game = userChoice => {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "pp":
    case "rr":
    case "ss":
      draw(userChoice, compChoice);
      return compScore_span.innerHTML;
  }
};

const main = () => {
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });

  scissor_div.addEventListener("click", () => {
    game("s");
  });
}

main();
