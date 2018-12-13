
//function printing all properties
function objectProperties(o) {
    var olength = Object.keys(o).length;
    var res = "";
    for (var i = 0; i < olength; i++) {
      var key = Object.keys(o)[i];
      var name = o[key];
      var type = typeof(name);
      if(type === "function"){
        res = res + key + ": " + " , type: " + type + " ";
      } else
      res = res + key + ": " + name + " , type: " + type + " ";
    }
    return res;
  }
  
  console.log(objectProperties(employee));


// inicialization
var employee = {name:"Anna", 
               surname:"Kowalski",
               id: 12345,
               position: "programmer",
               department:"Mibile apps",
               fullName : function() {
          return this.name + " " + this.surname;
               },
               allInfo : function() {
                 return this.id + " 's full name is " + this.fullName() +
                 ", he/she is a/an " + this.position + 
                 " and works in " + this.department;
               }
               };
        

console.log(employee.allInfo());


