

// for (let index = 1; index <= 10; index++){
//     const element = index
//     console.log(index)
// }

// for (let i= 5; i <= 15; i++){
//     const element = i
//     if (i % 2 == 0){
//         console.log(`${i} is even number`)
//     }
//     else{
//         console.log(`${i} is odd number`)
//     }
// }

// let index = 0
// while (index <= 12){
//     console.log(index)
//     index++
// }


const myArray = [2, 5,7, 8]

// for (i of myArray){
//     console.log(i)
// }

// for (let i= 0; i< myArray.length; i++){
//     console.log(myArray[i])
// }

// for (let i=1; i<=10; i++){
//     console.log(` table of ${i} is `)
//     for (let j=1; j<= 10; j++)
//     {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }



// for (let i=0; i < 10; i++){
//     if (i==5){
//         console.log(`leave the number ${i}`)
//         continue
//     }
//     console.log(i)
// }

// let i = 11
// do{
//     console.log(i)
//     i = i+1
// }while (i<10)


// const myString = "Hello World"

// for (const i of myString){
//     console.log(i)
// }


const map = new Map()

map.set("IN", "India")
map.set("USA", "America")

// console.log(map)

// for (const [key,value] of map){
//     console.log(key,":", value)
// }


const myObject = {
    name: "jyoti",
    profile: "developer",
    language: "python"
}

// for (const key in myObject){
//     console.log(myObject[key])
// }


const myNameList = ["jyoti", "neha", "kiki"]

// myNameList.forEach( function (name){
//     console.log(name)
// })

// myNameList.forEach( (name) => {console.log(name)})

// function printMe(item){
//     console.log(item)
// }

// myNameList.forEach(printMe)

// myNameList.forEach(function(item, index){
//     console.log(item, index)
// })

const myCoding = [
    {
        codingName : "javascript",
        filename: "js"
    },
    {
        codingName: "python", 
        filename: "py"
    }
]

myCoding.forEach((element) => {
    console.log(element.codingName)
});