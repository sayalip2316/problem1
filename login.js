let num=12;
let count=0;
for(let i=0;i<=num;i++){
if(num%i==0){
count++;
}
}if(count==0){
console.log("It is a prime number");
}else{
console.log("It is not prime number");
}