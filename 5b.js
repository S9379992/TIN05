

function Student(first, last, sid, sgrades) {
    var avg = 0;
      this.firstName = first;
      this.lastName = last;
      this.id = sid;
      this.grades = sgrades;
      this.average = function() {
        for(var i = 0; i<sgrades.length; i++){
          avg = avg + sgrades[i];
        }
        var avg2 = avg/sgrades.length;
        return this.firstName + " " + this.lastName + ", average: " + avg2;};
  }
  var s12345 = new Student("Nick", "Holmes ", 12345, [5,2,5,4]);
  
  console.log(s12345.average());