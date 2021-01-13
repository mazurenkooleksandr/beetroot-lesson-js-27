function yearFun () {
    let text = document.getElementById('paragraphNum');
    let year = document.yearForm.yearInto.value;

 
    if (year%4 === 0 && year%100 !== 0 || year % 400 === 0) {
        let audio = new Audio('./audio/leap_year.mp3');
        audio.play();
        text.innerHTML="Високосний рік";

    } else {
        let audio = new Audio('./audio/not_a_leap_year.mp3');
        audio.play();
        text.innerHTML="Не високосний рік";
    } 

}