$(document).ready(function() { // do this when the document is loaded
	$("#sorryTab").show(); // show the element with ID "element"
    $("#monopolyTab").hide(); // hide the element with ID "otherElement"
    $("#genericTab").hide();
});

$("#monopolyButton").click(function() { // do this when the button is click
	$("#monopolyTab").show(); // show the element with ID "element"
    $("#sorryTab").hide(); // hide the element with ID "otherElement"
    $("#genericTab").hide();
});


$("#sorryButton").click(function() { // do this when the button is click
	$("#sorryTab").show(); // show the element with ID "element"
    $("#monopolyTab").hide(); // hide the element with ID "otherElement"
    $("#genericTab").hide();
});

$("#genericButton").click(function() { // do this when the button is click
	$("#genericTab").show(); // show the element with ID "element"
    $("#monopolyTab").hide(); // hide the element with ID "otherElement"
    $("#sorryTab").hide();
});
