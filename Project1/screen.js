/*
function handleOrientation(event) {

    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
    
    document.documentElement.style.setProperty("--rowNum", 6);
}

window.addEventListener('deviceorientation', handleOrientation);
*/
window.addEventListener('orientationchange', changeOrientation, false);

function changeOrientation() {
if (orientation == 0 || orientation == 180) {
    $("#currentValue").html(34) 
}
else {
    $("#currentValue").html(45) 
}}