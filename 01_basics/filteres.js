

const myArray = [1, 2, 3, 4, 5]

const filterItem = myArray.filter((item)=> item > 3)
console.log(filterItem)

const itemStore = []
myArray.forEach((item) => {
    if (item > 4){
        console.log(item)
        itemStore.push(item)
    }
})
console.log(itemStore)

const myBooks = [
    {
        title: "Ancient History", genre: "History", publish: 1999, edition: 1991
    },
    {
       title: "Math Calculations", genre: "Math", publish: 1980, edition: 1990
    },
    {
        title: "Hemlet", genre: "English", publish: 1990, edition: 2000
    }
]

const books = myBooks.filter((bk) => bk.genre === "History")
console.log(books);

const mybk = myBooks.filter((bk) => 
{
    return bk.edition > 1980 && bk.publish >= 1980
})
console.log(mybk)



const myArray1 = [1, 2, 3, 4, 5, 6, 7]
const mapped = myArray1.map((i) => i*4)
console.log(mapped)

const mapped1 = myArray1.map((i) => i*20).map((i) => i*2).filter((i) => i>100)
console.log(mapped1)