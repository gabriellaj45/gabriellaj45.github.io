
function handleOrientation(event) {

    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
    
    document.documentElement.style.setProperty("--rowNum", 6);
}

window.addEventListener('deviceorientation', handleOrientation);