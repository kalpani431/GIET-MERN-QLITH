console.log("today we are going to learn function");
function fun(v){
    console.log("this is function")
    console.log(v)
}
fun(20);
fun(30);
// function (){
//}

function namedFUN(){
    console.log("this is a named function")
}
namedFUN()

let exeFUN=function(){
    console.log("this is the expressional function")
}
exeFUN()

//console.log(exeFUN)

let arroeFUN = () => {
    console.log("this is the arrow function")   
    let a=20
    return a;
}
let a=arrowFUN()
console.log(a)

let hof=function(func){
    console.log("this is the higher order function")
    func()
}
hof(function(){
    console.log("this is the argument function")
})

let hof=function(){
    return function(){
        console.log("return fun")
    }
}

let catchedFun=hof()
catchedFun()

// (function IIF(){
//     console.log("IIF execute")
// })()
    
 //string
 let str="this is the string";
 //console.log(str [1])

 str="this is the string";
 console.log(str)

 let str1='this is the string using single quote';
 console.log(str1)

 let str2=new String("this is thestring object");
 console.log(str2.valueOf());

 let testStr="this is the test string";
 console.log(testStr.length)
 console.log(testStr.toUpperCase());
 console.log(testStr.toLowerCase());

 console.log(testStr.concat("1"));
 console.log(testStr.length)

 console.log(testStr.trim().length)
//  console.log(testStr.trimStart())
//  console.log(testStr.trimEnd())

console.log(testStr.replace("t","T"))
console.log(testStr.replaceAll("t","T"))
console.log(testStr.slice(0,4))

let originalStr="this is the original";
let reverseStr=""
for(let idx=originalStr.length-1;idx>=0;idx--){
   reverseStr+originalStr[idx]
}
console.log(reverseStr)



