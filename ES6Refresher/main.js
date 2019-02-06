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

//SPREAD - USED TO MAKE A COPY OF ARRAY OR OBJECT AND APPEND TO IT
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4];
console.log(arr2);

//DESTRUCTURING
const profile = {
  name: "Deepak",
  address: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India"
  },
  hobbies: ["movies", "music"]
};

const { name, address, hobbies } = profile;
console.log(name, address, hobbies);

const { city, state } = profile.address;
console.log(city, state);
