class Student{ 
    constructor (first, last, sid,  sgrades){
        this.firstName = first;
        this.lastName = last;
        this.id= sid; 
        this.grades = sgrades;
    }
    
    get fullName() {
        return this.firstName + " "+ this.lastName; 
    }
    set fullName ({name, surname}){
        this.firstName = name; 
        this.lastName =surname; 
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
var s12345 = new Student("Nick", "Holmes ", 12345, [5,2,5,4]);
console.log(s12345.Average, s12345.fullName);