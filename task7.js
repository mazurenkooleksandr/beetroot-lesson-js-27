function sevenFun () {
    let text = document.getElementById('sevenNum');
    let discount = document.getElementById('amountNum');
    let amount = document.sevenForm.sevenInto.value;
    let result;
    

 
    if (amount >=200 && amount < 300) {
        result = Math.round((amount/100*97)*100)/100;
        text.innerHTML='Сума зі знижкою: ' + result + ' грн.';
        amn = Math.round((amount - result)*100)/100;
        discount.textContent ='Знижка: ' + '3%' + ', ' + amn + ' грн.';
    } else if (amount >=300 && amount < 500) {
        result = Math.round((amount/100*95)*100)/100;
        text.innerHTML='Сума зі знижкою: ' + result + ' грн.';
        amn = Math.round((amount - result)*100)/100;
        discount.textContent ='Знижка: ' + '5%' + ', ' + amn + ' грн.';
    } else if (amount >=500) {
        result = Math.round((amount/100*93)*100)/100;
        text.innerHTML='Сума зі знижкою: ' + result + ' грн.';
        amn = Math.round((amount - result)*100)/100;
        discount.textContent ='Знижка: ' + '7%' + ', ' + amn + ' грн.';
    } else {
        text.innerHTML='Сума зі знижкою: ' + 'недостатня сума.';
        discount.textContent ='Знижка: ' + '0%' + ', ' + '0' + ' грн.';

    }
        



    

}