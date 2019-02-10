$(document).ready(function() { // do this when the document is loaded
	$("#dialerTab").show(); // show the element with ID "element"
    $("#listTab").hide(); // hide the element with ID "otherElement"
    $("#contactTab").hide();
    $("#helpTab").hide();
});

$("#dialerButton").click(function() { // do this when the button is click
	$("#dialerTab").show(); // show the element with ID "element"
    $("#listTab").hide(); // hide the element with ID "otherElement"
    $("#contactTab").hide();
    $("#helpTab").hide();
});

$("#listButton").click(function() { // do this when the button is click
	$("#listTab").show(); // show the element with ID "element"
    $("#dialerTab").hide(); // hide the element with ID "otherElement"
    $("#contactTab").hide();
    $("#helpTab").hide();
});

$("#contactButton").click(function() { // do this when the button is click
	$("#contactTab").show(); // show the element with ID "element"
    $("#dialerTab").hide(); // hide the element with ID "otherElement"
    $("#listTab").hide();
    $("#helpTab").hide();
});

$("#helpButton").click(function() { // do this when the button is click
	$("#helpTab").show(); // show the element with ID "element"
    $("#dialerTab").hide(); // hide the element with ID "otherElement"
    $("#listTab").hide();
    $("#contactTab").hide();
});

$("#dialer_pad button").click(function() {
	$("#numberInput").val($("#numberInput").val() + this.innerText);
})

$("#buttonDialerClear").click(function() {
	$("#numberInput").val("");
})