/*
function handleOrientation(event) {

    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
    
    document.documentElement.style.setProperty("--rowNum", 6);
}

window.addEventListener('deviceorientation', handleOrientation);
*/
/*
window.addEventListener('orientationchange', changeOrientation, false);

function changeOrientation() {
if (orientation == 0 || orientation == 180) {
    document.getElementById('extra').style.display='none'
    
}
else {
    document.getElementById('extra').style.display='grid' 
    alert("You are now in landscape");
}}
*/
$( window ).on( "orientationchange", function( event ) {
    $( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
  });
   
  // You can also manually force this event to fire.
  $( window ).orientationchange();