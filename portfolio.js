$(document).ready(function() { // do this when the document is loaded
	$("#bioTab").show(); // show the element with ID "element"
    $("#dcTab").hide(); // hide the element with ID "otherElement"
    $("#finalTab").hide();
});

$("#bioButton").click(function() { // do this when the button is click
	$("#bioTab").show(); // show the element with ID "element"
    $("#dcTab").hide(); // hide the element with ID "otherElement"
    $("#finalTab").hide();
});

$("#dcButton").click(function() { // do this when the button is click
	$("#dcTab").show(); // show the element with ID "element"
    $("#bioTab").hide(); // hide the element with ID "otherElement"
    $("#finalTab").hide();
});

$("#projectButton").click(function() { // do this when the button is click
	$("#finalTab").show(); // show the element with ID "element"
    $("#bioTab").hide(); // hide the element with ID "otherElement"
    $("#dcTab").hide();
});