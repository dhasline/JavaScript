function createStudents(sname) {
  return {
    stu_name: sname,
    hobbies: ["drawing", "dancing"],
    subjects: {
      // return "english maths";
      sem1: "math eng",
      sem2: "sci his",
    },
  };
}
let stu1 = createStudents("Dhasline");
console.log(stu1.stu_name);
console.log(stu1.subjects.sem1);
let stu2 = createStudents("Mercy");
console.log(stu2.stu_name);
console.log(stu2.subjects.sem2);
