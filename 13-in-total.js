var rightAnswer;
var strSum;

function getRandomNumbers(){
    let res = [0, 0, 0];
    let currentSum = 0;
    for(let i = 0; i < 3; ++i){
        let randNum = Math.floor(Math.random() * (13 - currentSum));
        res[i] = randNum;
        currentSum += randNum;
    }
    return res;
}

function getTask(){
    let nums = getRandomNumbers();
    strSum = nums[0] + " + " + nums[1] + " + " + nums[2];
    rightAnswer = 13 - nums[0] - nums[1] - nums[2];

    $(".sum13title").html("");
    $(".sum13task").html(strSum + " + __ = 13");

    console.log(rightAnswer);
}

$(document).ready(function() {
    getTask();

    for(let i = 1; i <= 12; ++i){
        $(".number" + String(i)).click(function(){
            if(i == rightAnswer){
                $(".sum13title").html("Верно!")
                $(".sum13task").html(strSum + " + " + rightAnswer + " = 13");
                (new Promise((resolve) => setTimeout(resolve, 750))).then(()=>{
                    getTask();
                });

            }
            else{
                $(".sum13title").html("Не верно...")
            }
        });
    }
});
