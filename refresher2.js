// function cachedFunction(fn) {
//     fn()
// }

// //factorila using clousure

function factorial() {
    // let facto = num ;
     function fact(n){
        if(n=== 1 || n === 0) return 1
        return n*fact(n-1)
     }
     return fact;
}
const result = factorial();
console.log(result(5))
console.log(result(3));
// const result1 = factorial(0)
// console.log(result1(3));

// function add5(x){
   
//     function a(y){
     
//         return x++ + y
//     }
//     return a
// }
// const resu = add5(5)
// console.log(resu(10)) 
// console.log(resu(20)) 
// const resu2 = add5(100)
// console.log(resu2(10)) 
// function sumSeries(num) {
//     let sum = 0
//     function summing() {
//         let i = 1;
//         while(i <= num)
//         {
//             sum += i;
//             i++;
//         }
//         return sum;
//     }
//     return summing;
// }
// const res = sumSeries(5);
// console.log(res());

// //2. firstcase to uppercase

let str = "kalai"
if(str[0] != str[0].toUpperCase()){
    str = str[0].toUpperCase() + str.slice(1);
    console.log(str);
   
}
 else{
    console.log("Already in uppercase", str);
 }

 function Calculator() {
    this.a = 0;
    this.b = 0;
    this.read = function() {
         this.a = Number(prompt("Enter first Number: "));
         this.b = Number(prompt("Enter second number: "))
    };
    this.sum = function() {
        return this.a + this.b
    };
    this.mul = function() {
        return this.a * this.b
    };
 }
 let cal = new Calculator();
 cal.read()
 console.log(cal.sum())
 console.log(cal.mul())

// //1. cachedFunction()
// function multiply(a, b) {
//     console.log("Computing..")
//     return a * b;
// }
// function cachedFunction(fn) {
//      const cache = {};
//      return function(...args){
//         const key = args.join(",");
//         if(key in cache){
//             console.log("from cache")
//             return cache[key];
//         }
//         const result = fn(...args)
//         cache[key] = result;
//         return result;
//      }
// } 

// const cached = cachedFunction(multiply);
// console.log(cached(2, 3));
// console.log(cached(5, 6));
// console.log(cached(2, 3));

// //2. Static and dynamic scoping 
// // normal variable inside a function/block and this
// let x = 10;
// function outer() {
//     let x = 25
//     function inner() {
//         console.log(x);
//     }
//     inner()
// }
// outer()

// function sub() {
//     console.log(this.name);
// }
// let ob = {
//     name : "Kalai",
//     sub
// }
// ob.sub()
// // deep clone
// // doubt

let x = 10;

function inner() {
    console.log(x);
}

function outer() {
    let x = 20;
    inner();   // inner looks at caller’s x
}

outer();
