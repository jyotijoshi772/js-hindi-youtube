
const object = {
    name: "nikki",
    "profile": "developer", 
    language: "python"
}

// console.log(object)

// console.log(object.name)
// console.log(object.profile)
// console.log(object["profile"])

const object2 = {}

object2.id = 56
object2.name = "jyoti"
object2.location = "bangalore"

// console.log(object2)

const object3 = new Object()

object3.email = "jj@gamil.com"
object3.name ={
    fullname: {
        firstname : "jyoti",
        lastname: "joshi"
    }
}

// console.log(object3)
// console.log(object3.name.fullname.lastname)

// console.log({...object, ...object2})
console.log(Object.keys(object3))
console.log(Object.values(object3))
console.log(Object.entries(object3))
console.log(object3.hasOwnProperty("name"))


const object4 = Object.assign(object, object2)
// console.log(object4)

const object5 = Object.assign({}, object, object2)
// console.log(object4)

const userData = [
    {   
        name: "kiki",
        language: "javascript"
    },
    {
        name: "navi",
        language: "react"
    }
]

console.log(userData[1].language)


// de structure of objects

const course = {
    coursename : "python course",
    courseinstructor: "jyoti"
}

const {courseinstructor} = course

console.log(courseinstructor)

const {coursename: name} = course

console.log(name)
