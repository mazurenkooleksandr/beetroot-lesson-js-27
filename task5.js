function palindromeFun() {
    let text = document.getElementById('palindromeParagraph');
    let palindrome = document.palindromeForm.palindromeInto.value;

    palindrome = palindrome + '';
    if (palindrome === palindrome.split('').reverse().join('')){
        text.innerHTML="Паліндром";
        text.classList.remove('animationtwo');
        text.classList.add('animation');
    } else {
        text.innerHTML="Не Паліндром";
        text.classList.remove('animation');
        text.classList.add('animationtwo');
    }
    

}