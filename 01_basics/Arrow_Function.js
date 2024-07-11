

const User = {
    username: "jyoti",
    profile: "developer",
    usermessage: function() {
            console.log(`Hello, ${this.username}`)
    }
}

User.usermessage()

User.username = "nikki"

User.usermessage()


function number() {
    let username = "nilesh"
    console.log(this.username)
}
number()  
//                    incorrect way


const subodnum = () => {
    let name = "jyoti"
    console.log(this.name)
}
subodnum()

const addtwo = (num1,num2) => (num1+num2)

console.log(addtwo(5, 7))



const sumofNum = () => (console.log(2+3))