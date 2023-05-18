//part-1
var names = ["Satya", "Venky", "vamsi", "vinay"];

function addNameToEnd(name) {
  names.push(name);
}

addNameToEnd("madhan");

console.log(names); 

//part-2
function checkIfNameExists(name) {
    return names.includes(name);
  }
  
  console.log(checkIfNameExists("Satya")); 
  console.log(checkIfNameExists("vinay"));

  //part-3
  function compareNameLists(newNames) {
    var commonNames = [];
  
    for (var i = 0; i < newNames.length; i++) {
      if (names.includes(newNames[i])) {
        commonNames.push(newNames[i]);
      }
    }
  
    return commonNames;
  }
  
  var newList = ["Abhi", "Adarsh", "Sai", "Junaid"];
  console.log(compareNameLists(newList)); 

  //part-4
  function getNamesLength(names) {
    var namesLength = [];
  
    for (var i = 0; i < names.length; i++) {
      namesLength.push(names[i].length);
    }
  
    return namesLength;
  }
  
  console.log(getNamesLength(names)); //
