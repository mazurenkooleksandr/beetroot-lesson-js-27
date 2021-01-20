const quiz = [
    {
        'q': "Якою рукою зручніше помішувати чай?",

        "a": {
            "l": "Лівою рукою",
            "q": "Правою рукою",
            "r": "В якій руці ложка",
            "w": "Обома руками"
        }

    },

    {
        "q": "Яке колесо не крутиться при розвороті машини?",

        "a": {
            "q": "Ліве колесо",
            "w": "Праве колесо",
            "l": "Задні колеса",
            "r": "Запасне колесо"
        }

    },

    {
        "q": "Який місяць в році має 28 днів?",

        "a": {
            "l": "Лютий",
            "r": "Кожен місяць має",
            "w": "Липень",
            "q": "Жовтень"
        }

    },

    {
        "q": "Що можна побачити з заплющеними очима?",

        "a": {
            "r": "Сон",
            "w": "Майбутнє",
            "l": "Фільм",
            "q": "Відповіді до екзамену"
        }

    }

];

let answers = {


    
}



function nineFun() {
    let result = {};
    let step = 0;

    function showQuestion (questionNumber) {
        document.getElementById("button__tab_9").style.display = "none";
        document.querySelector('.question').innerHTML = quiz[step]['q'];
        let answer = '';
        for(let key in quiz[step]['a']) {
            answer += `<li data-v="${key}" class="answer-variant">${quiz[step]['a'][key]}</li>`
        }
        document.querySelector('.answer').innerHTML = answer;
    }

    document.onclick = function(event) {
        event.stopPropagation();
        if(event.target.classList.contains('answer-variant') && step<quiz.length) {
            if(result[event.target.dataset.v] != undefined){
                result[event.target.dataset.v]++;
            } else {
                result[event.target.dataset.v] = 0;
            }
            step++;
            if (step == quiz.length) {
                document.querySelector('.question').remove();
                document.querySelector('.answer').remove();
                showResult();
            } else {
                showQuestion(step);

            }
        }
        console.log(result)

        
        
    }
    

    function showResult() {
        
        let key = Object.keys(result).reduce(function(a,b){
           
        });
        console.log(key);
    }
    
    



    showQuestion(step);
    
}


