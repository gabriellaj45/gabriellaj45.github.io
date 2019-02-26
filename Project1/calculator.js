var globalAnswer 
var numberString = ""


function storeAnswer(value) {
var value = value
globalAnswer = value 
return value
}

function getCurrentValue() {
var currentValue = document.getElementById("currentValue").innerHTML
currentValue = parseInt(currentValue, 10)
return currentValue 
}

function clearCurrentValue(event) {
$("#calClear").click(function(event) {
	$("#currentValue").html(0)
	numberString = ""
	globalAnswer = 0
	var answer = globalAnswer
	return answer
})
}

clearCurrentValue(event) 
function equals(event) {
$("#calEquals").click(function(event) {
	var answer = globalAnswer
	$("#currentValue").html(answer) 
	numberString = ""
	return answer
})
}

equals(event)
function addition(num1) {
	/*
$(".operatorButton").click(function(event) {
	
	var thingClicked = this.innerHTML
	if($(this).hasClass("add")) {
		num1 = getCurrentValue()
		$("#currentValue").html(0)
		return 1
	}*/
	var thingClicked = this.innerHTML
	if($(this).hasClass("numButton")) {
		var currentValue = parseInt(thingClicked)
		valueString = currentValue.toString()
		numberString = numberString + valueString
		var newNumber = parseInt(numberString) 	
		$("#currentValue").html(newNumber)
		var result = num1 + newNumber
		storeAnswer(result) 
		return result
	}else{
		numberString = ""
		return thingClicked
	}
	
	
	
	/*
	
	if ($(this).hasClass("number")) {
	var nextNum = parseInt(thingClicked)
	$("#currentValue").html(nextNum) 
	var result = num1 + nextNum
	storeAnswer(result) 
	return result
	} else {
	return thingClicked
	}*/
	
})
}
/*
function subtraction(event, num1) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var currentValue = parseInt(thingClicked)
		currentValue = currentValue.toString()
		numberString = numberString + currentValue
		var newNumber = parseInt(numberString, 10) 	
		$("#currentValue").html(newNumber) 
		var result = num1 - newNumber
		storeAnswer(result) 
		return result
	} else {
		numberString = ""
		return thingClicked
	}
	})
}

function multiplication(event, num1) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var currentValue = parseInt(thingClicked)
		currentValue = currentValue.toString()
		numberString = numberString + currentValue
		var newNumber = parseInt(numberString, 10) 	
		$("#currentValue").html(newNumber)
		var result = num1 * newNumber
		storeAnswer(result) 
		return result
	} else {
		numberString = ""
		return thingClicked
	}
	})
}

function division(event, num1) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var currentValue = parseInt(thingClicked)
		currentValue = currentValue.toString()
		numberString = numberString + currentValue
		var newNumber = parseInt(numberString, 10) 	
		$("#currentValue").html(newNumber)
		var result = num1 / newNumber
		storeAnswer(result) 
		return result
	} else {
		numberString = ""
		return thingClicked
	}
	})
}

function power(event, num1) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var currentValue = parseInt(thingClicked)
		currentValue = currentValue.toString()
		numberString = numberString + currentValue
		var newNumber = parseInt(numberString, 10) 	
		$("#currentValue").html(newNumber)
		var result = Math.pow(num1, newNumber)
		storeAnswer(result) 
		return result
	} else {
		numberString = ""
		return thingClicked
	}
	})
}

function squareRoot(event) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var currentValue = parseInt(thingClicked)
		currentValue = currentValue.toString()
		numberString = numberString + currentValue
		var newNumber = parseInt(numberString, 10) 	
		$("#currentValue").html(newNumber) 
		var result = Math.sqrt(newNumber)
		storeAnswer(result) 
		return result
	} else {
		numberString = ""
		return thingClicked
	}
	})
}

function naturalLog(event) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var currentValue = parseInt(thingClicked)
		currentValue = currentValue.toString()
		numberString = numberString + currentValue
		var newNumber = parseInt(numberString, 10) 	
		$("#currentValue").html(newNumber) 
		var result = Math.log(newNumber)
		storeAnswer(result) 
		return result
	} else {
		numberString = ""
		return thingClicked
	}
	})
}

function exponential(event) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var currentValue = parseInt(thingClicked)
		currentValue = currentValue.toString()
		numberString = numberString + currentValue
		var newNumber = parseInt(numberString, 10) 	
		$("#currentValue").html(newNumber) 
		var result = Math.exp(newNumber)
		storeAnswer(result) 
		return result
	} else {
		numberString = ""
		return thingClicked
	}
	})
}
*/
function clickButton(event) {
$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	
	if ($(this).hasClass("numButton")) {
		
		var currentValue = getCurrentValue()
		currentValue = currentValue.toString()
		var newString = currentValue + thingClicked 
		var newNumber = parseInt(newString, 10) 
		$("#currentValue").html(newNumber)
		
	}
	

	if ($(this).hasClass("add")){
		var num1 = getCurrentValue()
		addition(num1)
	}

	/*
	if ($(this).hasClass("subtract")) {
		var num1 = getCurrentValue()
		subtraction(event, num1)
	}

	if ($(this).hasClass("multiply")) {
		var num1 = getCurrentValue()
		multiplication(event, num1)
	}

	if ($(this).hasClass("divide")) {
		var num1 = getCurrentValue()
		division(event, num1)
	}

	if ($(this).hasClass("power")) {
		var num1 = getCurrentValue()
		power(event, num1)
	}

	if ($(this).hasClass("squareRoot")) {
		squareRoot(event)
	}

	if ($(this).hasClass("naturalLog")) {
		var num1 = getCurrentValue()
		naturalLog(event, num1)
	}

	if ($(this).hasClass("exponential")) {
		exponential(event)
	}

	if ($(this).hasClass("squared")) {
		var num1 = getCurrentValue()
		var result = Math.pow(num1, 2)
		storeAnswer(result) 
	}*/
	/*
	if ($(this).hasClass("equals")) {
		return equals()
	}
	if ($(this).hasClass("clear")) {
		return clearCurrentValue()
	}
	*/
	/*
	if ($(this).hasClass("number")) {
		
		var currentValue = getCurrentValue()
		currentValue = currentValue.toString()
		var newString = currentValue + thingClicked 
		var newNumber = parseInt(newString, 10) 
		$("#currentValue").html(newNumber)
		
	}*/

	
})

return thingClicked
}
clickButton(event)