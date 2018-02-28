//Variables
//==========================================================

var timer = 60;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

var answerInputs =[Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];

//Main Process
//===========================================================

$(document).ready(function(){

	//Load the HTML with only the start button present
	$("#mid_game_container").hide();
	$("#end_container").hide();


	$("#start_button").on("click", function(){

	// Hide the start Div from the user
	$("#start_container").hide();

	// Show the Game Div
	$("#mid_game_container").show();

	startCountdown();
	return;

	});

    function timeUp(){
		// Checked values of Radio Buttons
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();

        for (i = 0, i < answerInputs.length, i++){
		if(answerInputs[i] == undefined){
			unansweredCount++;
		}
		else if(answerInputs[i] == "correct"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		//After answers are checked and tallied, display score numbers
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);

		//reveal completed score
		$("#end_container").show();

	    }
    }

});