//CONST AND LET

//FOREACH - USED TO LOOP THROUGH AN ARRAY

//MAP - USED TO LOOP THROUGH LISTS IN REACT AND IT RETURNS AN ARRAY

//FILTER - USED TO FILTER A VALUE AND RETURN THE REMAINING IN AN ARRAY USED IN REDUX

const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Sharon" },
  { id: 3, name: "Bob" }
];

const people2 = people.filter(person => person.id != 2);
console.log(people2);

