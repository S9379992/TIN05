
function Student(first, last, sid, sgrades) {
    var avg = 0;
      this.firstName = first;
      this.lastName = last;
      this.setFullName = function(name, surname){
            this.firstName = name; 
            this.lastName =surname; 
      }
      this.getFullName = function(){
          return this.firstName + " "+ this.lastName;  
      }
      this.id = sid;
      this.grades = sgrades;
      this.getAverage = function() {
        for(var i = 0; i<this.grades.length; i++){
          avg = avg + this.grades[i];
        }
        var avg2 = avg/this.grades.length;
        return this.firstName + " " + this.lastName + ", average: " + avg2;};
  }
  var s12345 = new Student("Nick", "Holmes ", 12345, [5,2,5,4]);
   
  console.log(s12345.getAverage(), s12345.getFullName());