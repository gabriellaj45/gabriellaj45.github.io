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
    $("#currentValue").html(0)
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

function clickButton(event) {
  $(".calculatorButton").click(function(event) {
    var thingClicked = this.innerHTML
  
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

	if ($(this).hasClass("number")) {
		var currentValue = getCurrentValue()
		currentValue = currentValue.toString()
		var newString = currentValue + thingClicked 
		var newNumber = parseInt(newString, 10) 
		$("#currentValue").html(newNumber)
	}
  })
  return thingClicked
}

clickButton(event)