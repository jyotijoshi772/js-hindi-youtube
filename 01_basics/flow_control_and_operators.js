
let val1 = 10

if (val1>4) {
    console.log("numbre is greater than 4")
}
else if (val>6){
    console.log("number is greater than 6")
}
else {
    console.log("number is greater than 4 and 6")
}



if (2 === "2"){
    console.log("yes numbers are equal with its datatype")
}
else{
    console.log("numbers are not equal")
}

const userloggedIn = true
const userdebitcard = false

if (userloggedIn && !userdebitcard){
    console.log("user exists")
}
else{
    console.log("user is not eleigible to login")
}

if (userloggedIn || userdebitcard){
    console.log("user logged in")
}
else{
    console.log("user not exists")
}

const month = "may"

switch (month) {
    case "january":
        console.log("january month");
        break;
    case "febuary":
        console.log("febuary month");
        break;
    case "march":
        console.log("march month");
        break;
    case "april":
        console.log("april month");
        break;
    default:
        console.log("month is not avlabile");
        break;
}


const object1 = {}

if (Object.keys(object1).length === 0){
    console.log("object is empty")
}

const array1 = []

array1.length === 0 ? console.log("empty array") : console.log("array is not empty")

const val2 = null ?? 56
console.log(val2)

const val3 = undefined ?? 45
console.log(val3)

const val4 = 2 ?? 4 
console.log(val4)

const val5 = 3 ?? 6 ?? 9
console.log(val5)