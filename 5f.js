class Person {
   constructor(first, last){
    this.firstName = first;
    this.lastName = last;
   }
   get fullName() {
    return this.firstName + " "+ this.lastName; 
}
set fullName ({name, surname}){
    this.firstName = name; 
    this.lastName =surname; 
}
  
}
  class Student extends Person {
    constructor (first, last, sid, sgrades){
        super(first, last); 
        this.id = sid; 
        this.grades = sgrades;
    }
    get Average (){
        var avg = 0; 
        for(var i = 0; i<this.grades.length; i++){
            avg = avg + this.grades[i];
          }
          var avg2 = avg/this.grades.length;
          return "Average: " + avg2;
    }
    
}
var mike = new Student ("Mike", "Holmes ", 12345, [5,2,5,4]);
console.log(mike.Average, mike.fullName);