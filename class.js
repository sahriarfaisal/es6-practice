//Class Deceleration
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa school";
    }
}
const student1 = new Student(224, "Sahriar");
const student2 = new Student(210, "Faisal");
const student3 = new Student(225, "Lipon");
//aces separate property.
console.log(student1.name, student2.name);
//aces default all property
console.log(student3);

