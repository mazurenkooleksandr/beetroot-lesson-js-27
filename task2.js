function numFun () {
    let numbers = document.numForm.numIntro.value;
    let symb = document.getElementById("divNumber");

    if (numbers == 0) {
        symb.innerHTML=")";
    } else if (numbers == 1) {
        symb.innerHTML="!";
    } else if (numbers == 2) {
        symb.innerHTML="@";
    } else if (numbers == 3) {
        symb.innerHTML="#";
    } else if (numbers == 4) {
        symb.innerHTML="$";
    } else if (numbers == 5) {
        symb.innerHTML="%";
    } else if (numbers == 6) {
        symb.innerHTML="^";
    } else if (numbers == 7) {
        symb.innerHTML="&";
    } else if (numbers == 8) {
        symb.innerHTML="*";
    } else if (numbers == 9) {
        symb.innerHTML="(";
    } else if (numbers >= 10) {
        symb.innerHTML="Вкажіть число нижче";
    } else if (numbers <= 0) {
        symb.innerHTML="Вкажіть число нижче";
    }
}