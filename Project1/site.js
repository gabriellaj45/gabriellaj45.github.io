var globalAnswer 

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
	$("#currentValue").html("0")
	getCurrentValue()
})
}

clearCurrentValue(event) 
function equals(event) {
$("#calEquals").click(function(event) {
	var answer = globalAnswer
	$("#currentValue").html(answer) 
	return answer
})
}

equals(event)
function addition(event, num1) {
$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
	var nextNum = parseInt(thingClicked)
	$("#currentValue").html(nextNum) 
	var result = num1 + nextNum
	storeAnswer(result) 
	return result
	} else {
	return thingClicked
	}
})
}

function subtraction(event, num1) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var nextNum = parseInt(thingClicked)
		$("#currentValue").html(nextNum) 
		var result = num1 - nextNum
		storeAnswer(result) 
		return result
	} else {
		return thingClicked
	}
	})
}

function multiplication(event, num1) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var nextNum = parseInt(thingClicked)
		$("#currentValue").html(nextNum) 
		var result = num1 * nextNum
		storeAnswer(result) 
		return result
	} else {
		return thingClicked
	}
	})
}

function division(event, num1) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var nextNum = parseInt(thingClicked)
		$("#currentValue").html(nextNum) 
		var result = num1 / nextNum
		storeAnswer(result) 
		return result
	} else {
		return thingClicked
	}
	})
}

function power(event, num1) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var nextNum = parseInt(thingClicked)
		$("#currentValue").html(nextNum) 
		var result = Math.pow(num1, nextNum)
		storeAnswer(result) 
		return result
	} else {
		return thingClicked
	}
	})
}

function squareRoot(event) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var num = parseInt(thingClicked)
		$("#currentValue").html(num) 
		var result = Math.sqrt(num)
		storeAnswer(result) 
		return result
	} else {
		return thingClicked
	}
	})
}

function naturalLog(event) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var num = parseInt(thingClicked)
		$("#currentValue").html(num) 
		var result = Math.log(num)
		storeAnswer(result) 
		return result
	} else {
		return thingClicked
	}
	})
}

function exponential(event) {
	$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML
	if ($(this).hasClass("number")) {
		var num = parseInt(thingClicked)
		$("#currentValue").html(num) 
		var result = Math.exp(num)
		storeAnswer(result) 
		return result
	} else {
		return thingClicked
	}
	})
}


function clickButton(event) {
$(".calculatorButton").click(function(event) {
	var thingClicked = this.innerHTML

	if ($(this).hasClass("number")) {
		var currentValue = getCurrentValue()
		currentValue = currentValue.toString()
		var newString = currentValue + thingClicked 
		var newNumber = parseInt(newString, 10) 
		$("#currentValue").html(newNumber)
	}

	if ($(this).hasClass("add")) {
		var num1 = getCurrentValue()
		addition(event, num1)
	}

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
	}

	
})
return thingClicked
}

clickButton(event)