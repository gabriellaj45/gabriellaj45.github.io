function getText() {
    var equationString;
    equationString = document.getElementById('mathEquation').value;

    var equationPieces = equationString.split(" ");
    var operator = equationPieces[0];
    var firstNum = equationPieces[1];
    var secondNum = equationPieces[2];
    
    operation = findOperator(operator);
    answer = calculate(operation, firstNum, secondNum);
    document.getElementById('mathEquation').value = answer;
    
}

function findOperator(operator){
  
    if(operator == '+') {
        return 1
    }
    if(operator == '-') {
        return 2
    }
    if(operator == '*') {
        return 3
    }
    if(operator == '/') {
        return 4
    }
    if(operator == '÷') {
        return 4
    }
    if(operator == 'sqrt') {
        return 5
    }
    if(operator == 'pow') {
        return 6
    }
    if(operator == 'ln') {
        return 7
    }
    if(operator == 'e') {
        return 8
    }
    if(operator == 'pow2') {
        return 9
    }
    else {
        return 3
    }

}

function calculate(op, first, second) {
    if(op == 1){
        var firstNum = parseInt(first);
        var secondNum = parseInt(second);
        var answer = firstNum + secondNum;
        return answer
    }
    if(op == 2){
        var firstNum = parseInt(first);
        var secondNum = parseInt(second);
        var answer = firstNum - secondNum;
        return answer
    }
    if(op == 3){
        var firstNum = parseInt(first);
        var secondNum = parseInt(second);
        var answer = firstNum * secondNum;
        return answer
    }
    if(op == 4){
        var firstNum = parseInt(first);
        var secondNum = parseInt(second);
        var answer = firstNum / secondNum;
        return answer
    }
    if(op == 5){
        var firstNum = parseInt(first);
        var answer = Math.sqrt(firstNum);
        return answer
    }
    if(op == 6){
        var firstNum = parseInt(first);
        var secondNum = parseInt(second);
        var answer = Math.pow(firstNum, secondNum)
        return answer
    }
    if(op == 7){
        var firstNum = parseInt(first);
        var answer = Math.log(firstNum)
        return answer
    }
    if(op == 8){
        var firstNum = parseInt(first);
        var answer = Math.exp(firstNum)
        return answer
    }
    if(op == 9){
        var firstNum = parseInt(first);
        var answer = Math.pow(firstNum, 2)
        return answer
    }

}

document.onkeypress = keyPress;

function keyPress(e){
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if(key == 13 || key == 3){
    document.getElementById("calEquals").click();
  }
}

function myFunc(element) {
    var getCurrentValue = document.getElementById("mathEquation").value;
    document.getElementById("mathEquation").value = getCurrentValue + element.getAttribute('calcNum');
}