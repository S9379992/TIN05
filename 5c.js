class Student {

    constructor (firstName, lastName, id, /*grades*/) {
        this.name = firstName; 
        this.surname = lastName; 
        this.s = id; 
        // this.grades = grades; 
    }

    
    
}

Student.prototype.courses = ['a', 'b', 'c'];

function CreateStudent(n, s, id) {
    return new Student(n, s, id);
}


var s1 =  CreateStudent("Rob", "Smith", 1577,["Math", "Biology", "Programming"] ) ; 
console.log(s1, "courses:"+s1.courses); 

