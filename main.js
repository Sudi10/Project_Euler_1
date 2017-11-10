var sumMultiplesOf3 = 0;
for(i=0; i<=999; i+=1*3) {
sumMultiplesOf3 += i;
}
var sumMultiplesOf5 = 0;
for(j=0; j<=999; j+=1*5) {
sumMultiplesOf5 += j;
}
console.log("The sum is: " + (sumMultiplesOf3 + sumMultiplesOf5));

------------------------------------------------------------------------------

var sumMultiplesOf3 = 0;
for(var i=0; i<=999; i++) {
  if (i % 3 == 0)
sumMultiplesOf3 += i;
}
var sumMultiplesOf5 = 0;
for(var i=0; i<=999; i++) {
  if (i % 5 == 0)
sumMultiplesOf5 += i;
}
var duplicates = 0;
for(var i=0; i<=999; i++) {
  if ((i%3) === 0 && (i%5) === 0)
  duplicates += i;
}
console.log("The sum is: " + (sumMultiplesOf3 + sumMultiplesOf5 - duplicates));

------------------------------------------------------------------------------

var sumMultiplesofA = 0;
var sumMultiplesofB ;
for(var sumMultiplesofB=0; sumMultiplesofB<999; sumMultiplesofB++) {
    if((sumMultiplesofB%3) == 0 || (sumMultiplesofB%5) == 0)
sumMultiplesofA += sumMultiplesofB;
}
console.log((sumMultiplesofA + sumMultiplesofB));

------------------------------------------------------------------------------
