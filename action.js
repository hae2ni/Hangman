const word = "gorgeous";
const answer = word.split("");
let life = answer.length;

let wrong = [];

const $answerInput = document.getElementById("anwerInput");
const $youwrong = document.getElementById("youwrong");
const $lifeCount = document.getElementById("lifeCount");
const $underLine = document.querySelectorAll(".underLine");

const $g = document.querySelector(".g");
const $o = document.querySelector(".o");
const $r = document.querySelector(".r");
const $e = document.querySelector(".e");
const $s = document.querySelector(".s");
const $u = document.querySelector(".u");

const $answer = document.querySelectorAll(".answer ");

//글자 입력 함수
function inputAnswer() {
  const $answervalue = $answerInput.value;

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
}

//클릭해서 틀린 애들 화면에 불러오기
function clickBtn() {
  console.log(wrong);
  answer.includes(wrong[0]) ? undefined : ($youwrong.innerText += wrong[0]);
  wrong = [];
}

function reset() {}
