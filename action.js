const word = "gorgeous";
const answer = word.split("");
let life = answer.length;

let wrong = [];
let youWrote = [];

const $answerInput = document.getElementById("anwerInput");
const $youwrong = document.getElementById("youwrong");
const $lifeCount = document.getElementById("lifeCount");
const $underLine = document.querySelectorAll(".underLine");
const $isSame = document.getElementById("isSame");

const $g = document.querySelector(".g");
const $o = document.querySelector(".o");
const $r = document.querySelector(".r");
const $e = document.querySelector(".e");
const $s = document.querySelector(".s");
const $u = document.querySelector(".u");

const $answer = document.querySelectorAll(".answer ");

const $canvas = document.getElementById("hangman");
const context = $canvas.getContext("2d");
const DRAWS = ["head", "body", "rightHarm", "leftHarm", "rightLeg", "leftLeg"];

//클릭해서 틀린 애들 화면에 불러오기
let step = 0;
let answerStep = 0;
function clickBtn() {
  const $answervalue = $answerInput.value;
  input = $answervalue;
  const isSame = document.createElement("p");
  $isSame.appendChild(isSame);
  if (youWrote.includes($answervalue)) {
    setTimeout(() => {
      isSame.innerText += "이미 있는 단어입니다.";
    }, [3000]);
  }

  $answer.forEach((value) =>
    value.classList.contains($answervalue)
      ? value.classList.remove("notYet") &
        $underLine.forEach((value) =>
          value.classList.contains($answervalue)
            ? value.classList.add("notYet")
            : undefined
        )
      : wrong.push($answervalue)
  );
  youWrote.push($answervalue);

  answer.includes(wrong[0])
    ? answerStep++
    : ($youwrong.innerText += wrong[0]) & Draw(DRAWS[step++]);
  wrong = [];

  if (step === 6) {
    isSame.innerText += "힝,,,나 주거뗘ㅠ";
  }

  if (answerStep === 6) {
    isSame.innerText += "히히 살았다! 고마오";
    setTimeout(() => {
      reset();
    }, [5000]);
  }
}

function reset() {
  context.clearRect(0, 0, $canvas.clientWidth, $canvas.height);
  wrong = [];
  youWrote = [];
  $answer.forEach((value) => value.classList.add("notYet"));
  location.reload();
}

//행맨그리기
function Draw(part) {
  switch (part) {
    case "head":
      context.lineWidth = 5;
      context.beginPath();
      context.arc(100, 50, 25, 0, Math.PI * 2, true);
      context.closePath();
      context.stroke();
      break;

    case "body":
      context.beginPath();
      context.moveTo(100, 75);
      context.lineTo(100, 140);
      context.stroke();
      break;

    case "rightHarm":
      context.beginPath();
      context.moveTo(100, 85);
      context.lineTo(60, 100);
      context.stroke();
      break;

    case "leftHarm":
      context.beginPath();
      context.moveTo(100, 85);
      context.lineTo(140, 100);
      context.stroke();
      break;

    case "leftLeg":
      context.beginPath();
      context.moveTo(100, 140);
      context.lineTo(125, 190);
      context.stroke();
      break;

    case "rightLeg":
      context.beginPath();
      context.moveTo(100, 140);
      context.lineTo(80, 190);
      context.stroke();
      break;

    default:
      return;
      break;
  }
}
