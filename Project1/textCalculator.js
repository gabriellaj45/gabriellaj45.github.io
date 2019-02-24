function getText() {
    var equationString;
    equationString = document.getElementById('mathEquation').value;

    var equationPieces = equationString.split(" ");
    var operator = equationPieces[0];
    var firstNum = equationPieces[1];
    var secondNum = equationPieces[2];
    alert(operator);
    operation = findOperator(operator);
    answer = calculate(operation, firstNum, secondNum);
    $("#currentValue").html(answer);
    return false;
    
}
function replaceTimesAndDivides(string) {
    string = string.replace("x", "*")
    string = string.replace("÷", "/")
    return string
  }

function findOperator(operator){
    
    operator = replaceTimesAndDivides(operator);
    
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
}