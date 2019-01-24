function sorting(arrNumber) {
  var arrsort =  arrNumber.sort()
  return arrsort
}

function getTotal(arrNumber) {
  arrTotal = sorting(arrNumber)
  count = 0
  angkaTerbesar = arrTotal[arrTotal.length-1]
  for ( var i=0; i<arrTotal.length; i++ ) {
      if(arrTotal[i]==angkaTerbesar){
          count++
      }

  }if(angkaTerbesar===undefined){
      return  " "
  }else {
      return "angka paling besar adalah "  + angkaTerbesar+ " dan jumlah kemunculan sebanyak " + count + " Kali."
  }

}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''