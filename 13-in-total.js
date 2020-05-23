var nums = [1, 0, 0];
var rightAnswer = 12;

function getRandomNumbers() {
  let currentSum = 0;
  for (let i = -1; i < 2; ++i) {
    let rand = Math.floor(Math.random() * (12 - currentSum)) + 1;
    if (i < 0) {
      rightAnswer = rand;
    } else {
      nums[i] = rand;
    }
    currentSum += rand;
  }
  nums[2] = 13 - nums[0] - nums[1] - rightAnswer;
}

function getTask() {
  getRandomNumbers();

  $(".title").html("");
  for (let i = 0; i < 3; i++) {
    $(".task .num" + (i + 1)).html(nums[i]);
  }
  $(".task .inputedNumber").html("__");

  console.log(rightAnswer);
}

$(document).ready(() => {
  getTask();

  for (let i = 1; i <= 12; ++i) {
    $(".input .number" + i).click(() => {
      $(".input .number" + i)
        .animate({ "font-size": "30px" }, 50)
        .animate({ "font-size": "40px" }, 50);
      if (i == rightAnswer) {
        $(".title").html("Верно!");
        $(".task .inputedNumber").html(i);
        new Promise((resolve) => setTimeout(resolve, 750)).then(getTask);
      } else {
        $(".title").html("Не верно...");
      }
    });
  }
});
