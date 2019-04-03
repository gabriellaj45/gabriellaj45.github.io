$(document).ready(function() { // do this when the document is loaded
	$("#sorryTab").show(); // show the element with ID "element"
    $("#monopolyTab").hide(); // hide the element with ID "otherElement"
    $("#pokerTab").hide();
});

$("#monopolyButton").click(function() { // do this when the button is click
	$("#monopolyTab").show(); // show the element with ID "element"
    $("#sorryTab").hide(); // hide the element with ID "otherElement"
    $("#pokerTab").hide();
});

$("#pokerButton").click(function() { // do this when the button is click
	$("#pokerTab").show(); // show the element with ID "element"
    $("#sorryTab").hide(); // hide the element with ID "otherElement"
    $("#monopolyTab").hide();
});

$("#sorryButton").click(function() { // do this when the button is click
	$("#sorryTab").show(); // show the element with ID "element"
    $("#monopolyTab").hide(); // hide the element with ID "otherElement"
    $("#listTab").hide();
});