function eurFun() {
    let uuy = document.getElementById('currencyParagraph');
    let currency = document.currencyForm.currencyInto.value;
    let eur = document.getElementById('eur');
    let amount;

    if (eur.onclick) {
        amount = Math.round((currency / 34.23)*100)/100;
        uuy.innerHTML = 'Сума: ' + amount + ' EUR';
    }
}

function usdFun() {
    let uuy = document.getElementById('currencyParagraph');
    let currency = document.currencyForm.currencyInto.value;
    let usd = document.getElementById('usd');
    let amount;

    if(usd.onclick) {
        amount = Math.round((currency / 28.03)*100)/100;
        uuy.innerHTML = 'Сума: ' + amount + ' USD';
    }
}

function gbpFun() {
    let uuy = document.getElementById('currencyParagraph');
    let currency = document.currencyForm.currencyInto.value;
    let gbp = document.getElementById('gbp');
    let amount;

    if(gbp.onclick) {
        amount = Math.round((currency / 38.34)*100)/100;
        uuy.innerHTML = 'Сума: ' + amount + ' GBP';
    }
}