//Variables
//==========================================================

//countdown starting point
var count = 60;

//right, wrong, unanswered counts
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

//Main Process
//===========================================================

$(document).ready(function(){

	// Intialize the game with hidden Divs
	$("#midGameContainer").hide();
	$("#endContainer").hide();

	$("#start").on("click", function(){

		// Hide the start Div from the user
		$("#start").hide();


		// Show the Game Div
		$("#midGameContainer").show();

		startCountdown();
		return;

	});	


	// Counts down and displays the time to the user
	function countdown(){

		// Decrement the counter, down from 60 seconds
		count--;

		// Display the count to the user in the DOM
    	$('#timerNumber').html(count + " Seconds");

    	// ----------- Handle Cases for Time ar 0 Seconds -----------
			// User finishes before time is up and clicks done
			$("#finish").on("click", function(){

			// Stop the countdown and run the timeUp function
			//stopTime(); <---This didn't work
			count = 0; 
			return;

			});


			// Finish the game after the timer reaches 0
			if(count == -1){

				// Collect the radio inputs
				timeUp();

				// Hide the game Div from the user
				$("#midGameContainer").hide();

			}    	

    };

	// Show the countdown, increment is 1 second
	function startCountdown(){
		//repeats the decrease of the var count every 1000ms
		setInterval(countdown, 1000);

	};

	// Stop the countdown. EDIT: This didn't work.
	//function stopTime(){
	//	clearInterval(startCountdown);
	//}

    function timeUp(){
		//Checked values of Radio Buttons
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

		var answerInputs =[Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];
        
        for(i = 0; i < answerInputs.length; i++){
			if(answerInputs[i] == undefined){
				unansweredCount++;
			}
			else if(answerInputs[i] == "correct"){
				correctCount++;
			}
			else{
				wrongCount++;
			}       	
        };

		// After answers are validated, display the score results
		$('#correctAnswers').html(correctCount);
		$('#wrongAnswers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// Show the completed Score Div
		$("#endContainer").show();

    };
});