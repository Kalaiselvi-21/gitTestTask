//1. setTimeout using native js
function mysetTimeout(callback, delay) {
     let start = Date.now();
     while(Date.now() - start < delay) {
        // Do nothing
     }
     callback()
};
// function multiply(){
//     console.log("multiply function has been called");
// }
mysetTimeout(() => {
    console.log("Executed after delay")
}, 1000);
// mysetTimeout(1000, multiply)

//2. own array
class Myarr {
    constructor() {
       this.data = {};
       this.length = 0;
    }
    push(item){
           this.data[this.length] = item;
           this.length++;
           return this.length;
    }
    pop(){
        if(this.length == 0)
            return undefined;
        let last = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return last;
    }
    shift(){
        if(this.length === 0)
            return undefined;
        let first = this.data[0];
        for(let i = 0; i < this.length - 1; i++) {
                 this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return first;
    }
    unShift(item){
        for(let i = this.length; i > 0; i--){
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.length;
    }
    splice(start, deletecount, ...items) {
            let removed = new Myarr();
            for(let i = 0; i < deletecount; i++) {
                 removed.push(this.data[start + i]);
                 delete this.data[start + i];
            }
            for(let i = this.length - 1; i >= start; i--){
                this.data[i + items.length] = this.data[i];
            }
            for(let i = 0; i < items.length; i++){
                this.data[start + i] = items[i];
            }
            this.length = this.length - deletecount + items.length;
            return removed;
    }
    indexOf(item) {
          for(let i = 0; i < this.length; i++) {
            if(this.data[i] === item)
                return i;
          }
          return -1;
    }
    forEach(callback) {
         for(let i = 0; i < this.length; i++) {
            callback(this.data[i], i);
         } 
    }
    
} 
let arr = new Myarr();
console.log(arr.push(10));
console.log(arr.push(20));
console.log(arr.unShift(5));
console.log(arr.indexOf(20));
arr.forEach(x => console.log(x));
//3. validation of string
function validateString(input, callback) {
    setTimeout(() => {
if(typeof input === "string" && input === input.toLowerCase()){
            return callback(null, true)
           }
           return callback(new Error('Invalid string'), null)
    }, 500)
} 
let myArr = ['first', 'Second', 'thiRd', 4, false, 'true'];
let results = {};
myArr.forEach(item => {
    validateString(item, (err, res) => {
        results[item] = res ? true : false;
        console.log(results);
    });
});
