
 document.getElementById('button__tab_8_square').onclick = function squareResult() {
    let square = document.getElementById('number__tab_8_square').value;
    square = square * 3.78;
    let input = document.getElementById('number__tab_8_square')
    if (square > 0) {
        let squareResult = document.querySelector('.square_result');
        squareResult.style.width = `${square}px`;
        squareResult.style.height = `${square}px`;
        squareResult.style.border = "3px solid purple";
        input.setAttribute('disabled', 'disabled');
    }

    document.getElementById('button__tab_8_circle').onclick = function circleResult() {
            let circle = document.getElementById('number__tab_8_circle').value;
            circle = circle * 3.78;
            if (circle > 0) {
                let circleResult = document.querySelector('.circle_result');
                circleResult.style.width = `${circle}px`;
                circleResult.style.height = `${circle}px`;
                circleResult.style.border = "3px solid yellow";
                circleResult.style.borderRadius = "50%";
            }    

        let allResult = document.querySelector('.all_result');
        
        if (square >= circle) {
            allResult.innerHTML = "Результат: Коло поміститься у квадрат";
            

        
        } else {
            allResult.innerHTML = "Результат: Коло не поміститься у квадрат";
        }
    
    };

};



   


   





















