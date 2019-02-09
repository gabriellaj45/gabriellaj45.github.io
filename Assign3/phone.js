$(document).ready(function() { // do this when the document is loaded
	$("#dialerTab").show(); // show the element with ID "element"
    $("#listTab").hide(); // hide the element with ID "otherElement"
    $("#contactTab").hide();
});

$("#dialerButton").click(function() { // do this when the button is click
	$("#dialerTab").show(); // show the element with ID "element"
    $("#listTab").hide(); // hide the element with ID "otherElement"
    $("#contactTab").hide();
});

$("#listButton").click(function() { // do this when the button is click
	$("#listTab").show(); // show the element with ID "element"
    $("#dialerTab").hide(); // hide the element with ID "otherElement"
    $("#contactTab").hide();
});

$("#contactButton").click(function() { // do this when the button is click
	$("#contactTab").show(); // show the element with ID "element"
    $("#dialerTab").hide(); // hide the element with ID "otherElement"
    $("#listTab").hide();
});