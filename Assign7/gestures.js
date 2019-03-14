downX = 0
downY = 0

$( "#gestureArea" ).mousedown(function(event) {
    downX = event.pageX; 
    downY = event.pageY;
    $("#gestureResult").text("Mouse Down");
  });

$("#gestureArea").dblclick(function() {
    $("#gestureResult").text("Mouse Double Click"); 
});

  $( "#gestureArea" ).mouseup(function(event) {
    upX = event.pageX; 
    upY = event.pageY;
    /*
    if(upX > downX && upY > downY){
        $("#gestureResult").text("Swipe Diagonal");
    }else if(upX > downX && upY < downY){
        $("#gestureResult").text("Swipe Diagonal");
    }else if(upX < downX && upY < downY){
        $("#gestureResult").text("Swipe Diagonal");
    }else if(upX < downX && upY > downY){
        $("#gestureResult").text("Swipe Diagonal");
    }else 
    if (upY > downY){
        $("#gestureResult").text("Swipe Down");
    }else if (upY < downY){
        $("#gestureResult").text("Swipe Up");
    }else*/
    if (upX < downX) {
        $("#gestureResult").text("Swipe Left");
    }else if (upX > downX){
        $("#gestureResult").text("Swipe Right");
    }else if(upX == downX) {
        $("#gestureResult").text("Mouse Up");
    }
  });

  