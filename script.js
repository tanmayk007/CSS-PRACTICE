const StudentName = "TANMAY";
const StudentRollNumber = "SCFU125079";
let Semester = 3;
Semester = Semester + 1;
console.log(StudentName,StudentRollNumber);
console.log(Semester);


let a = 10;
let b = 20;
let c = a;
a = b;
b = c;
console.log(a,b);


let message = "outside";
{
    let message = "inside";
    console.log(message);
}
console.log(message);


