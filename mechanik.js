var tries;
var randomNumber;
var guess;

/** Start Button
* Resets tries, and generates a random number */

$("#start").on("click", function() {
    randomNumber = Math.floor(Math.random() * 100 + 1);
/** Clear list */
	$("#results").empty();
	$("#status").text("Spiel gestartet");
	tries = 7;
	$("#tries").text(tries);
	$("#check").removeClass("inactive");
});

/** Check Button
* Checks guessed number in correlation to generated number */

$("#check").on("click", function() {
	if ($("#check").hasClass("inactive")) {
		$("#status").text("Bitte zuerst Spiel starten.");
	}
	else {
		guess = $("#input").val();
		if (guess > randomNumber) {
			$("#results").prepend('<li>Die geratene Zahl ist zu groß: <span class="badge">' + guess + '</span></li>');
			tries-=1;
			$("#tries").text(tries);

		}
		else if (guess < randomNumber) {
			$("#results").prepend('<li>Die geratene Zahl ist zu kein: <span class="badge">' + guess + '</span></li>');
			$("#guess").text(guess);
			tries-=1;
			$("#tries").text(tries);

		}
		else {
			$("#results").prepend('<li>Die gesuchte Zahl war: <span class="badge">' + guess + '</span></li>');
			$("#check").addClass("inactive");

		}
		if (tries == 0) {
			$("#results").text("Zu viele Versuche benötigt.");
			$("#check").addClass("inactive");
		}
	}
});