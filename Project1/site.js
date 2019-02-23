$(document).ready(function(){
});

$("#dialer_pad button").click(function() {
	$("#numberInput").val($("#numberInput").val() + this.innerText);
})

$("#calClear").click(function() {
	$("#numberInput").val("");
})