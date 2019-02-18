$(document).ready(function(){
});

$("#dialer_pad button").click(function() {
	$("#numberInput").val($("#numberInput").val() + this.innerText);
})

$("#buttonDialerClear").click(function() {
	$("#numberInput").val("");
})