const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 }
];

//Create a new array that contains only the names of the users in uppercase letters.

let namesUpper=users.map((user)=>user.name.toUpperCase())

