//  Spread //

const number = [1,2,3]
const newNumber = [...number,4]
const num = [number,4]

console.log(newNumber) // [1,2,3,4]
console.log(num) //[[1,2,3],4]

const person={
    name: "Saurabh"
}

const newPerson = {
    ...person,
    age:28
}
console.log(newPerson)

//  Rest //
const filter = (...args) =>{//this ... is used as Rest Operators
    return args.filter(el => el === 1)
}

console.log(filter(1,2,3))