function getNumber(num) {
    var result = document.getElementById("result2");
    result.value += num;
}
function clearResult() {
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");
    result1.value = "";
    result2.value = "";
}
function getResult() {
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");
    if (result1.value.charAt(0) == "*" || result1.value.charAt(0) == "/" || result2.value.charAt(0) == "*" || result2.value.charAt(0) == "/") {
        result2.value = "Math Error"
        result1.value = "";
    }
    else {
        var result = result1.value + result2.value;
        result2.value = eval(result);
        result1.value = "";
    }
}
function calcSqrt() {
    var result = document.getElementById("result2");
    result.value = Math.sqrt(result.value)
}
function backSpace() {
    var result = document.getElementById("result2");
    if (result.value == "Math Error") {
        result.value = "";
    }
    else
        result.value = result.value.slice(0, result.value.length - 1);
}
function sendValue() {
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");
    if (result2.value.charAt(0) != "*" && result2.value.charAt(0) != "/") {
        result1.value += result2.value;
        result2.value = "";
    }
    else if(result2.value.charAt(0) == "+" || result2.value.charAt(0) == "-") {
        result1.value += result2.value;
        result2.value = "";
    }
}