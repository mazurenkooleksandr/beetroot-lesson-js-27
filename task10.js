function tenFun() {
    let date = new Date(document.tenForm.tenInto.value);
    let text = document.getElementById('tenNum');

    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

    text.innerHTML = 'Наступна дата: ' + date.toLocaleDateString();
}
