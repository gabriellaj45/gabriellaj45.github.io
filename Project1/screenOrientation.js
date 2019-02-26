$( window ).on( "orientationchange", function( event ) {
    if (window.orientation == 90 || window.orientation == -90) {
        document.getElementById("calculatorPad").style.gridTemplateColumns = "18% 18% 18% 18% 18%";
        document.getElementById("mathEquation").style.gridColumnEnd="span 5";
        document.getElementById("calSpace").style.gridColumnEnd="span 5";
        document.getElementById("mathEquation").style.fontSize="32px";

        var x = document.getElementsByClassName("calculatorButton");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.padding = '5px';
            x[i].style.fontSize = '15px';
        } 
        
        var x = document.getElementsByClassName("extra");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'grid';
        } 
    }
    if (window.orientation == 0 || window.orientation == 180) {
        document.getElementById("calculatorPad").style.gridTemplateColumns = "22% 22% 22% 22%";
        document.getElementById("mathEquation").style.gridColumnEnd="span 4";
        document.getElementById("calSpace").style.gridColumnEnd="span 4";
        document.getElementById("mathEquation").style.fontSize="64px";

        var x = document.getElementsByClassName("extra");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        var x = document.getElementsByClassName("calculatorButton");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.padding = '7.5%';
            x[i].style.fontSize = '25px';
        } 
        
    }
});
$( window ).orientationchange();