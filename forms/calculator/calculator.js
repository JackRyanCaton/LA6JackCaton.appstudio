let name = ""
let number1 = ""
let number2 = ""
let answer = ""

btnAdd.onclick=function(){
  let name = inptNameCalc.value
  let number1 = parseInt(inptNum1.value)
  let number2 = parseInt(inptNum2.value)
  let answer = number1 + number2
  lblAnswer.value = name + ", the answer is " + answer

}

btnMult.onclick=function(){
  let name = inptNameCalc.value
  let number1 = parseInt(inptNum1.value)
  let number2 = parseInt(inptNum2.value)
  let answer = number1 * number2
  lblAnswer.value = name + ", the answer is " + answer

}
