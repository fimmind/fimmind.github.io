var rightAnswer;
var nums = [1, 0, 0];

function getRandomNumbers(){
    var res = [0, 0, 0];
    var currentSum = 0;
    for(let i = 0; i < 3; ++i){
        let randNum = Math.floor(Math.random() * (13 - currentSum));
        res[i] = randNum;
        currentSum += randNum;
    }
    return res;
}

function getTask(){
    nums = getRandomNumbers();
    rightAnswer = 13 - nums[0] - nums[1] - nums[2];

    $(".title").html("");
    for(let i = 0; i < 3; i++){
        $(".task .num" + (i + 1)).html(nums[i]);
    }
    $(".task .inputedNumber").html("__")

    console.log(rightAnswer);
}

$(document).ready(function() {
    getTask();

    for(let i = 1; i <= 12; ++i){
        $(".input .number" + String(i)).click(function(){
            if(i == rightAnswer){
                $(".title").html("Верно!");
                $(".task .inputedNumber").html(i);
                (new Promise((resolve) => setTimeout(resolve, 750))).then(function(){
                    getTask();
                });
            }
            else{
                $(".title").html("Не верно...")
            }
        });
    }
});
