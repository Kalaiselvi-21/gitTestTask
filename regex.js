//1. email match
let email = "kalai@gmail.com";
// console.log(email.match(/\w+@\w+\.\w+/))
console.log(email.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/))

//2.credit card pattern
let creditCardNo = "4012888888881881";
console.log(creditCardNo.match(/^(?:\d[ -]*?){13,19}$/))

//3. text 
function extract(text) {

    const phoneRegex = /(?:\+?\(?\d{1,3}\)?[-.\s]?)?\d{5}[-.\s]?\d{5}/g;
    const emailRegex =  /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

    const emails = text.match(emailRegex) || [];
    const phoneNo = text.match(phoneRegex) || [];
    return {emails, phoneNo}
}


let text = ". Write a regex function to distinguish and pick the values of email address, phone number from the below paragraph Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada."
let result = extract(text);
console.log(result);

let password = "A.b.c1!";
let passwordRegex = /^(?!.*\.\.)(?!\.)(?!.*\.$)[A-Za-z0-9!#$%&'*+\-?=^_`{|}~,.]+$/;

console.log(password.match(passwordRegex))
