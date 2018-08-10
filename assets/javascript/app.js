$(document).ready(function() {

    //start button+ time count down
    $("#start").click(function() {

        //counting down fucntion displaying
        document.getElementById('timer').innerHTML =
            03 + ":" + 00;
        startTimer();

        function startTimer() {
            var presentTime = document.getElementById('timer').innerHTML;
            var timeArray = presentTime.split(/[:]+/);
            var m = timeArray[0];
            var s = checkSecond((timeArray[1] - 1));
            if (s == 59) { m = m - 1 }
            if (m < 0) { alert('timer is up') }

            document.getElementById('timer').innerHTML =
                m + ":" + s;
            setTimeout(startTimer, 1000);
        }

        function checkSecond(sec) {
            if (sec < 10 && sec >= 0) { sec = "0" + sec };
            if (sec < 0) { sec = "59" };
            return sec;
        }

    })

    //submit button//

    $("#submit").click(function check() {

        var question1 = document.questions.q1.value
        var question2 = document.questions.q2.value
        var question3 = document.questions.q3.value
        var correct = 0

        if (question1 === "Soul") {
            correct++;
        }
        if (question2 === "Kimchi") {
            correct++;
        }
        if (question3 === "Auto manufacture") {
            correct++
        }

        document.getElementById("correct").innerHTML = "You got" + correct + "CORRECT!"
    })
});