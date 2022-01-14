var number = 1;
var num = number; //copying value of number to num

number = 3;

console.log(num);
console.log(number); // Output 3. mean the value are getting copied.

const person = {
    name:"Saurabh"
}
const secondPerson = person; // here the value is not getting copied, however the pointer is point to the memory of the person object.
//To make copy
const thirdPerson = {
    ...person
};
person.name="Maurya"
console.log(secondPerson);
console.log(thirdPerson);

//This pointer and copy concept works on arrays as well.
