let arr2 = [20,90,5,78,4,2];
let a2 = arr2.filter((value)=>{
  return value%2==0 ;
})
console.log(a2);

a.filter(function (num,num2){
  console.log("hello",num,num2)
  return 1;
})
// VM339:2 hello 1 0
// VM339:2 hello 2 1
// VM339:2 hello 3 2
// VM339:2 hello 4 3
// VM339:2 hello 5 4
// (5) [1, 2, 3, 4, 5]
a.filter(function (num,num2){
  console.log("hello",num,num2)
  if(num2==3)return 0
  return 1;
})
// VM369:2 hello 1 0
// VM369:2 hello 2 1
// VM369:2 hello 3 2
// VM369:2 hello 4 3
// VM369:2 hello 5 4
// (4) [1, 2, 3, 5]
const t = a.filter(function (num,num2){
  console.log("hello",num,num2)
  if(num2==3)return 0
  return 1;
})
// VM382:2 hello 1 0
// VM382:2 hello 2 1
// VM382:2 hello 3 2
// VM382:2 hello 4 3
// VM382:2 hello 5 4
// undefined
// t
// (4) [1, 2, 3, 5]