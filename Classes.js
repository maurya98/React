class Human{
    constructor(){
        this.gender="female"
    }

    printGender(){
        console.log(this.gender)
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name="Saurabh"
        //this.gender = "Male" //this will update the gender in the super class
    }

    printName(){
        console.log(this.name)
    }
}

const person = new Person()
person.printName()
person.printGender()