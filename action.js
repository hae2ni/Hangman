const word = "gorgeous";
const answer = word.split("");
console.log(answer);

const INPUT_ANSWER = [];

const $underLine = document.getElementById("underLine");
const $answerInput = document.getElementById("anwerInput");
const $youwrong = document.getElementById("youwrong");

//시작 세팅  함수
function init() {
  answer.map((text) => {
    $p = document.createElement("p");
    $underLine.appendChild($p);
    $p.innerText = "_";
  });
}
init();

//글자 입력 함수
function inputAnswer(e) {
  const $answer = $answerInput.value;
  const wrong = [];
  console.log($answer);
  INPUT_ANSWER.push($answer);
  console.log(INPUT_ANSWER);

  answer.forEach((text) => {
    if (text === $answer) {
      console.log("here");
    } else {
      $youwrong.innerText += `${$answer}`;
    }
  });
}
