const textInput = document.getElementById('text-input');

const checkerBtn = document.getElementById('check-btn');

const result = document.getElementById('result');


function getPalindrome(msg){
    let cleaned = msg.toLowerCase().replace(/[^a-z0-9]/g, "");

    const palindrome = cleaned.split("").reverse().join("");

    if(cleaned === palindrome){
        return `${msg} is a palindrome`;
    }else{
        return `${msg} is not a palindrome`;
    }
 
    
}

window.addEventListener('DOMContentLoaded', ()=>{
    checkerBtn.addEventListener('click', ()=>{
        let input = textInput.value.trim();
        if(input === ""){
            alert("Please input a value")
            return;
        } 
        result.textContent = getPalindrome(input);
    })
})

