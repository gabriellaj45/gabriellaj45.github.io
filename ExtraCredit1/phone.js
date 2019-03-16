$(document).ready(function() { // do this when the document is loaded
	$("#dialerTab").show(); // show the element with ID "element"
    $("#listTab").hide(); // hide the element with ID "otherElement"
    $("#contactTab").hide();
});

$("#dialButton").click(function() { // do this when the button is click
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

$('#toggleButton').click(function (){
    $('link[href="phone.css"]').attr('href','phone-large.css');
 });

 $('#unToggleButton').click(function (){
    $('link[href="phone-large.css"]').attr('href','phone.css');
 });

 $("#dialer_pad button").click(function() {
	$("#numberInput").val($("#numberInput").val() + this.innerText);
})

$("#buttonDialerClear").click(function() {
	$("#numberInput").val("");
})
 