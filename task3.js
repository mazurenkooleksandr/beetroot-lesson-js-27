function numberFun () {
    let text = document.getElementById('pNum');
    let number = document.numberForm.numberInto.value;

    number = number + '';
 
    if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
         text.innerHTML="Тут є однакові числа";
    } else if (number[0] != number[1] || number[0] != number[2] || number[1] != number[2]){
         text.innerHTML="Тут немає однакових чисел";
    } 

    document.getElementById("number__tab_3").onkeyup=function(){
        let input = parseInt(this.value);
        if(input<0 || input>999){
            alert("Вкажіть тризначне число");
        }
    } 

    

   

   


}
