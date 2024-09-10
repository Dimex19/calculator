let sev = document.getElementById("seven").value
// console.log(sev);

// console.log('working');
let display = document.getElementById("display")
// console.log(display = 'hello');

let displayNumbers = (val)=> {
    return display.value = display.value + val
}

let evaluateDisplay = ()=> {
    return display.value = eval(display.value)
}

let clearScreen = ()=> {
    return display.value =  ""
}
let deleteCharacter = ()=> {
    allCharacter = display.value
    // console.log(allCharacter)
    return display.value = allCharacter.slice(0, -1)
    // return display.value = allCharacter + 'hi'
}
// console.log(deleteCharacter("delete"));

let negate = ()=> {
    return display.value = '-' + display.value
}

const str = 'Hello World'
const newStr = str.slice(0, -1)

console.log(newStr)

// evaluateDisplay()
// console.log(display.value);

// displaySeven()
// console.log(display);

// function myFunction() {
//     document.getElementById("demo").style.color = "blue";
// }