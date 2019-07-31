$(document).ready(function() { // do this when the document is loaded
	$("#homeTab").show(); // show the element with ID "element"
    $("#aboutTab").hide(); // hide the element with ID "otherElement"
    $("#projectsTab").hide();
});

$("#homeButton").click(function() { // do this when the button is click
	$("#homeTab").show(); // show the element with ID "element"
    $("#aboutTab").hide(); // hide the element with ID "otherElement"
    $("#projectsTab").hide();
});

$("#aboutButton").click(function() { // do this when the button is click
	$("#aboutTab").show(); // show the element with ID "element"
    $("#homeTab").hide(); // hide the element with ID "otherElement"
    $("#projectsTab").hide();
});

$("#projectsButton").click(function() { // do this when the button is click
	$("#projectsTab").show(); // show the element with ID "element"
    $("#homeTab").hide(); // hide the element with ID "otherElement"
    $("#aboutTab").hide();
});