let person = {
  name: "dhasline",
  age: 42,
  hobbies: ["painting", "drawing"],
  sibling: {
    brother: "AB",
    sister: "cd",
  },
  add_fun: function (a, b) {
    console.log(a + b);
  },
};
console.log(person.name);
person.add_fun(6, 7);
console.log(person.hobbies[1]);
