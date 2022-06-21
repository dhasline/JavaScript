function CreateStudents(sname) {
  this.stu_name = sname;
  this.hobbies = ["drawing", "dancing"];
  this.subjects = () => {
    return "english maths";
  };
}

let stu1 = new CreateStudents("Rini");
console.log(stu1.stu_name);
console.log(stu1.subjects());
let stu2 = new CreateStudents("Gifty");
console.log(stu2.stu_name);
console.log(stu2.subjects());
