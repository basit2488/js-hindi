console.log("Memory Stack and Heap");

// Primitive types (Stack)
//1) String
//2) Number
//3) Boolean
//4) Null
//5) Undefined
//6) Symbol

// Non Primitve types (Heap)
//1) Arrays
//2) Object
//3) Functions

//Primitive (Value - Stack)

let userName = "First User"
let anotherUser = userName
anotherUser = "MAB2488"
//console.log(anotherUser);
//console.log(userName);


// Non Primitive (Reference - Heap)

let userOne = {
    email : "abc@gmail.com",
    id : 123
}

let userTwo = userOne
userTwo.email = "basit2488@gmail.com"
userTwo.id = 2488
console.log(userOne)
console.log(userTwo);