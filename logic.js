//Function with Manual Integer Check
function sum(n){
    if (typeof n !== 'number' || n % 1 !== 0) {
  return "The value passed is not a number";
}


let total=0;
for (let i = 0; i <n;i++){
 total +=i;
}
return total;
 }
 
 //Function
 function factorial(n){
    if (n<0)
        return "Factorial not defined for negative numbers";
    let results = 1;
    for (let i =n; i >1; i--){
        result*=i;
    }
    return results;
 }
 // Function with Argument Count Logic
 function funkyMath(...args){
    if (args.length===2){
        return args[1]- args[0];
        }else if (args.length===3){
            return args[0] + args[2];
        } else if (args.length===4){
            const firstsum = args[0] + args[1];
            const secondsum = args[2] + args[3];
            return firstsum/ secondsum;
        } else {
            return "Invalid number of arguments";
        }
 }
