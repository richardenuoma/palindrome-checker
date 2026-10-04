const textInput = document.getElementById('text-input');

const checkerBtn = document.getElementById('check-btn');

const result = document.getElementById('result');


function getPalindrome(msg){
    const palindrome = msg.split("").reverse().join("").toLowerCase();
    return msg.toLowerCase() === palindrome;
}

console.log(getPalindrome("Madam"));