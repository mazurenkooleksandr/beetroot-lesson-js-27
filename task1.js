function ageFun () {
    let age = document.ageForm.ageIntro.value;
    let words = document.getElementById("divText");
    let photos = document.getElementById("divPhoto");

    if (age<= 0) {
        words.innerHTML="Введи свій вік нижче";
        photos.src="./img/question-mark.jpg";
    }
    else if (age >= 1 && age < 12) {
        words.innerHTML="Ти дитина";
        photos.src="./img/babies.png";

    }
    else if (age>=12 && age < 18) {
        words.innerHTML="Ти підліток";
        photos.src="./img/teenagers.png";
        
    }
    else if (age>=18 && age < 60) {
        words.innerHTML="Ти дорослий";
        photos.src="./img/adults.png";
        
    }
    else if (age>=60 && age < 100) {
        words.innerHTML="Ти пенсіонер"; 
        photos.src="./img/pensioners.png";
    }

    else if (age >= 100) {
        words.innerHTML="Введи свій вік нижче";
        photos.src="./img/question-mark.jpg";
    }
}