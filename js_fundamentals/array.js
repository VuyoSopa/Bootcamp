//let myarray = [2,4,6,8,10,12,14,16]
//myarray.pop();
//myarray.shift();
//console.log(myarray)

//myarray.push(20);
//myarray.unshift(5);
//console.log(myarray)
 
let array = [20,311,12,11,13,15,9,4,0,10]
let even  = new Array();
let odd  = new Array();
for (let v=0; v < array.length; v++)
  if(array[v] %2 ==0) {
  even.push(array[v])
  }else {
    odd.push(array[v])
  }

console.log(even)
console.log(odd)




