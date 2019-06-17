var totalscore = 0;
var maxscore = 4;
var resultscore = 0;
var unanswered = 0;
var answer = "";
// var audiowin = new Audio("assets/win.mp3");
// var audiolose = new Audio("assets/lose.mp3");

var quiz = {
    "question1": {
        "text": "This game involes black-and-white discs and a green grid for a board.",
        "a1": "Othello",
        "a2": "Go",
        "a3": "Connect Four",
        "correct": "Othello"
    },

    "question2": {
        "text": "In this game, you can be a dispatcher, medic, scientist, operations expert or researcher.",
        "a1": "Operation",
        "a2": "Risk",
        "a3": "Pandemic",
        "correct": "Pandemic"
    },

    "question3": {
        "text": "This is a 'Eurogame' in which players build a medieval landscape.",
        "a1": "Settlers of Catan",
        "a2": "Carcassonne",
        "a3": "Risk",
        "correct": "Carcassonne"
    },

    "question4": {
        "text": "This game was immortalized in 'When Harry Met Sally …'",
        "a1": "Scattergories",
        "a2": "Monopoly",
        "a3": "Pictionary",
        "correct": "Pictionary"
    },
}
$("#startgamebtn").on("click", gamestartdisplay);
$("#startgamebtn").on("click", displayQAText1);


$(".abtn").on("click", checkanswer1);
$(".abtn").on("click", checkanswer2);
$(".abtn").on("click", checkanswer3);
$(".abtn").on("click", checkanswer4);


function displayQAText1(questions) {
    $("#questionlocation").html(quiz.question1.text);
    $("#answer1").html(quiz.question1.a1);
    $("#answer2").html(quiz.question1.a2);
    $("#answer3").html(quiz.question1.a3);
}

function RevealAnswer1(questions) {
    $("#answerlocation").text("The correct answer was: " + quiz.question1.correct);
}

function checkanswer1() {
    answer = $(".btn").val();
    RevealAnswer1 ();
    console.log("User Chosen Answer is " + answer);
    if (answer == quiz.question1.correct) {
        totalscore++;
    } else { }
}

function displayQAText2(questions) {
    $("#questionlocation").text(quiz.question2.text);
    $("#answer1").text(quiz.question2.a1);
    $("#answer2").text(quiz.question2.a2);
    $("#answer3").text(quiz.question2.a3);
}
function RevealAnswer2(questions) {
    $("#answerlocation").text("The correct answer was: " + quiz.question2.correct);
}

function checkanswer2() {
    answer = $(".btn").val();
    RevealAnswer2 ();
    console.log("User Chosen Answer is " + answer);
    if (answer == quiz.question2.correct) {
        totalscore++;
    } else { }}


function displayQAText3(questions) {
    $("#questionlocation").text(quiz.question3.text);
    $("#answer1").text(quiz.question3.a1);
    $("#answer2").text(quiz.question3.a2);
    $("#answer3").text(quiz.question3.a3);
}
function RevealAnswer3(questions) {
    $("#answerlocation").text("The correct answer was: " + quiz.question3.correct);
}

function checkanswer3() {
    answer = $(".btn").val();
    console.log("User Chosen Answer is " + answer);
    RevealAnswer3 ();
    if (answer == quiz.question3.correct) {
        totalscore++;
    } else { }}

function displayQAText4(questions) {
    $("#questionlocation").text(quiz.question4.text);
    $("#answer1").text(quiz.question4.a1);
    $("#answer2").text(quiz.question4.a2);
    $("#answer3").text(quiz.question4.a3);
}
function RevealAnswer4(questions) {
    $("#answerlocation").text("The correct answer was: " + quiz.question4.correct);
}

function checkanswer4() {
    answer = $(".btn").val();
    console.log("User Chosen Answer is " + answer);
    RevealAnswer4 ();
    if (answer == quiz.question4.correct) {
        totalscore++;
    } else { }}

//div display control

function initaldivdisplay() {
    $('#initialscreen').show();
    $('#gamescreen').hide();
    $('#resultscreen').hide();
}

function gamestartdisplay() {

    $('#initialscreen').hide();
    $('#gamescreen').show();
}
function resultsdisplay() {
    $('#gamescreen').hide();
    $('#resultscreen').show();
}

    //timer begins
    // $("#timeremain").html(number);
    // number=100;
    // run();


initaldivdisplay();