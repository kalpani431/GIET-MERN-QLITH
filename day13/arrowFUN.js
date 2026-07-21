console.log("today we are going to learn special functions of the functions");

let arr = [1,2,3,4,5,6];
// for (let v of arr){
//console.log(v)
//}

arr.forEach( (v , i)=> {
    console.log(i+":",v)
})

let updateArr=arr.map(V => {
    return v*2
})
console.log(updateArr)

let filterArr =Array.filter((v) => {
    return v % 2===0;
})
console.log(filterArr)

console.log(add);
let numarr =[9,5,3,1,59,15,0];
console.log(numarr.sort((a,b) => {}))

