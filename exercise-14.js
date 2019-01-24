function changeVocals (str) {
   var vocals = [["a","b"],["i","j"],["u","v"],["e","f"],["o","p"]] 
   var change = ""
   var result = ""
   for ( var i=0; i<str.length; i++ ){
       change = str[i]
       for ( var j=0; j<vocals.length; j++ ) {
           if(str[i]==vocals[j][0]){
               change = vocals[j][1]
           }
           if(str[i]==vocals[j][0].toUpperCase()) {
               change =vocals[j][1].toUpperCase()
           }
       }
       result = result + change
   }
   return result
}


function reverseWord (str) {
  
  var reverse = ""
  for( var i=str.length-1; i>=0; i-- ) {
      reverse = reverse + str[i]
  }
  return reverse
}


function setLowerUpperCase (str) {
 
  result = ""
  for(var i = 0; i<str.length; i++ ) {
      if(str[i]===str[i].toUpperCase()){
          result = result + str[i].toLowerCase()
      }else if(str[i]===str[i].toLowerCase()){
        result = result + str[i].toUpperCase()
      }else {
        result = result + str[i]
    }
  }
  return result 
}

function removeSpaces (str) {
  
  result = ""
  for (var i = 0; i<str.length; i++){
      if(str[i]!=" "){
        result = result + str[i]
      }
  }
  return result
}


function passwordGenerator (name) {
  if(name.length<5){
      return "Minimal karakter yang diinputkan adalah 5 karakter"
  }else {
      name = changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name))))
      return name

  }
  
  
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'