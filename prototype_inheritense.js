// this is basically where we get values from second object in first object
// this is called Prototypal Inheritance
// this method is not advance js


// let pet = {
//     eats: true,
//     numberpet: 123
//     };
//     let dog = {
//     jumps: true
//     };
     
//     dog.__proto__ = pet; // (*)
     
//     // we can find both properties in dog now:
//     console.log("dog.eats",dog.numberpet)

    // in modern prototype

    let pet2 = {
        eats: true
        };
         
        // create a new object with pet as a prototype
        let dog1 = Object.create(pet2);
         console.log("dog1",dog1.eats,dog1)
        // alert(dog1.eats); // true
        console.log("getPrototypeOf",Object.getPrototypeOf(dog1) === pet2)
         
        // alert(Object.getPrototypeOf(dog1) === pet); // true
         
        Object.setPrototypeOf(pet2, {}); // change the prototype of dog to {}
        pet2 ={}
        console.log("dog1",dog1.eats,dog1,pet2)