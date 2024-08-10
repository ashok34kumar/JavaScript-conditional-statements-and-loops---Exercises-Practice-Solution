let output = " ";
for (let x = 0;  x <= 20;  x++) {
   if (x === 0) {
    output += x +" is even\n"
   }
   else if(x % 2 ===0){
    output += x  +" is even \n"

   }
   else{
    output += x + " is odd"
   }
    
}
alert(output);