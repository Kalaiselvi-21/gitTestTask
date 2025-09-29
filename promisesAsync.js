// // 1. testNum function
// function testNum(num) {
//   return new Promise((resolve, reject) => {
//     if (num >= 10)
//       resolve(`The given number ${num} is greater than or equal to 10`);
//     else reject(`The given number ${num} is less than 10`);
//   });
// }
// testNum(5)
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

// // //2. two functions makeAllCaps() and sortWords()
// let strArr = ["Apple", "Zebra", "Karnataka"];
// function makeAllCaps(arr) {
//   return new Promise((resolve, reject) => {
//     if (strArr.every((word) => typeof word === "string")) {
//       resolve(strArr.map((word) => word.toUpperCase()));
//     } else reject("Not items are array to Capitalize");
//   });
// }
// function sortWords(arr) {
//   return new Promise((resolve) => {
//       resolve(arr.sort());
//   });
// }
// makeAllCaps(strArr)
//   .then(sortWords)
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

// //   //3. Sleep callback function
//   function sleep(callback, x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//         console.log("Sleeping...")
//           callback()
//           resolve()
//     }, x)
//     })
//   }

//   function wakeup() {
//     console.log("Waking up...")
//   }
//   console.log("Before sleep")
//   sleep(wakeup, 1000)
//       .then(() => console.log("Promise resolved after sleep"))
//   console.log("After sleep")  
  
//   //4. for loop
  function printNumber(num, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log()
            resolve(`${num} after ${delay}sec`)
        }, delay)

    });
  }
  async function printSequential () {
    for(let i = 0; i <= 10; i++) {
        let delay = Math.floor(Math.random() * 6000)
        const results = await printNumber(i, delay);
        console.log(results);
    }
  }
  printSequential();
  
//   //5. recursive stack
  var somelist = readVeryLongList();
  var nextItem = function() {
    var item = somelist.pop();
    if(item) {
        console.log(item);
        // nextItem()
        setTimeout(nextItem, 0);
        
    }
  }
  nextItem()
//   //to resolve this we have to use asynchronous manner so for each tick it will be executed rather than immediately so after stack emptied

//   // code snippet explanation
  for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 10);
  }




  // x = 10;
  // console.log(x);

  // function func() {
  //   console.log(this);
  // }

  // func()
// "use strict";
//     let obj = {
//           name: "kalai",
//           name: "keerthana"
// }
// console.log(obj.name);
// var a = 10;
// console.log(delete a);

// let str = "kalai bhava Nandhu"
// let arr = str.split(" ");
// console.log(arr); 
