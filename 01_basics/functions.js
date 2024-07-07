
function addNumbers(num1, num2) {
    return num1+num2
}
const add = addNumbers(10,20)
console.log(add)

function subNum(num1, num2){
    console.log(num1-num2)
}

subNum(10, 20)

function multiplyNumbers(num1, num2, ...num3) {
    return [num1, num2, num3]

}

console.log(multiplyNumbers(10, 56, 78, 9))

const user ={
    name: "jyoti",
    email: "jyoti@gmail.com"
}

function getUserDetail(anyobject){
    console.log(`username is ${anyobject.name} and email is ${anyobject.email}`)
}
getUserDetail(user)

function returnArrayValue(getArray){
    return getArray[0]
}

console.log(returnArrayValue([67, 89]))

function checkUser(username){
    console.log(`username is ${username}`)
}
checkUser()

function checkUser1(username){
    if(username === undefined){
        console.log("please enter username")
    }
    else{
        console.log(`username is ${username}`)
    }    
}
checkUser()

function checkUser1(username){
    if(!username){
        console.log("please enter username")
    }
    else{
        console.log(`username is ${username}`)
    }    
}
checkUser()

