function firsttaskFun () {
    let age = document.firsttaskForm.firsttaskInto.value;
    let text = document.getElementById("firsttaskText");
    let photo = document.getElementById("firsttaskPhoto");

    if (age<= 0 || age >= 100) {
        text.innerHTML="Вкажи свій вік нижче";
        photo.src="./img/question-mark.jpg";
    } else if (age >= 1 && age < 12) {
        text.innerHTML="Ти дитина";
        photo.src="./img/babies.png";

    } else if (age>=12 && age < 18) {
        text.innerHTML="Ти підліток";
        photo.src="./img/teenagers.png";
        
    } else if (age>=18 && age < 60) {
        text.innerHTML="Ти дорослий";
        photo.src="./img/adults.png";
        
    } else if (age>=60 && age < 100) {
        text.innerHTML="Ти пенсіонер"; 
        photo.src="./img/pensioners.png";
    } 
}