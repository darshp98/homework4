/* shift alt a
how i will display this info:
- text size ?
 */

var table;
var dropdown;
var headers = [];
var healthDict = {};
var currHealth = {};
var hobbyDict = {};
var currHobby = {};
var foodDict = {};
var currFood = {};
var showsDict = {};
var currShows = {};
var mediasDict = {};
var currMedias = {};

function preload() {
	table = loadTable('assets/QuarantineQuestionnaire.csv', 'csv', 'header');
}

function setup() {
	textAlign(CENTER)
	createCanvas(windowWidth, windowHeight);

	headers = [table.columns[2], table.columns[3], table.columns[4], table.columns[5], table.columns[8]];

	dropdown = createSelect();
	dropdown.position(windowWidth / 2 - 100, 20)

	dropdown.option(headers[0], 0);
	dropdown.option(headers[1], 1);
	dropdown.option(headers[2], 2);
	dropdown.option(headers[3], 3);
	dropdown.option(headers[4], 4);

	for (var i = 0; i < table.getRowCount(); i++) {

		currHobby = table.get(i, "Favorite quarantine hobby").split(";");
		currFood = table.get(i, "Favorite quarantine take-out restaurant").split(";");
		currShows = table.get(i, "Favorite quarantine streaming service").split(";");
		currMedias = table.get(i, "Favorite quarantine social media platform").split(";");
		currHealth = table.get(i, "Rate your overall quarantine mental health").split(";");

		for (var a = 0; a < currHobby.length; a++) {
			if (currHobby[a] in hobbyDict) {
				hobbyDict[currHobby[a]] += 1;
			} else {
				hobbyDict[currHobby[a]] = 1;
			}
		}
		for (var a = 0; a < currFood.length; a++) {
			if (currFood[a] in foodDict) {
				foodDict[currFood[a]] += 1;
			} else {
				foodDict[currFood[a]] = 1;
			}
		}
		for (var a = 0; a < currShows.length; a++) {
			if (currShows[a] in showsDict) {
				showsDict[currShows[a]] += 1;
			} else {
				showsDict[currShows[a]] = 1;
			}
		}
		for (var a = 0; a < currMedias.length; a++) {
			if (currMedias[a] in mediasDict) {
				mediasDict[currMedias[a]] += 1;
			} else {
				mediasDict[currMedias[a]] = 1;
			}
		}
		if (currHealth in healthDict) {
			healthDict[currHealth] += 1;
		} else {
			healthDict[currHealth] = 1;
		}
	}
}

function draw() {
	background(220);
	var xVal = windowWidth / 2;
	var yVal = 100;

	if (dropdown.value() == 0) {
		for (var [key, value] of Object.entries(hobbyDict)) {
			textSize(20 + value * 5);
			text(key, xVal - 200, yVal);
			yVal += 100;
			if (yVal > height) {
				xVal += 500;
				yVal = 100;
			}
		}

	} else if (dropdown.value() == 1) {
		for (var [key, value] of Object.entries(foodDict)) {
			textSize(20 + value * 5);
			text(key, xVal, yVal);
			yVal += 100;
			if (yVal > height) {
				xVal += 500;
				yVal = 100;
			}
		}

	} else if (dropdown.value() == 2) {
		for (var [key, value] of Object.entries(showsDict)) {
			textSize(20 + value * 5);
			text(key, xVal, yVal);
			yVal += 100;
			if (yVal > height) {
				xVal += 500;
				yVal = 100;
			}
		}
	} else if (dropdown.value() == 3) {
		for (var [key, value] of Object.entries(mediasDict)) {
			textSize(20 + value * 5);
			text(key, xVal, yVal);
			yVal += 100;
			if (yVal > height) {
				xVal += 500;
				yVal = 100;
			}
		}
	} else if (dropdown.value() == 4) {

		text("On a scale from 1 to 5", xVal, 200)
		for (var [key, value] of Object.entries(healthDict)) {
			textSize(20 + value * 5);
			text(key, xVal - 200, 300);
			xVal += 100;
		}
	}
}
