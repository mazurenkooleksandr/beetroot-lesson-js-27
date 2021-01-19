const quiz = [
    {
        'q': "Якою рукою зручніше помішувати чай?",

        "a": {
            "1": "Лівою рукою",
            "2": "Правою рукою",
            "r": "В якій руці ложка",
            "4": "Обома руками"
        }

    },

    {
        "q": "Яке колесо не крутиться при розвороті машини?",

        "a": {
            "1": "Ліве колесо",
            "2": "Праве колесо",
            "3": "Задні колеса",
            "r": "Запасне колесо"
        }

    },

    {
        "q": "Який місяць в році має 28 днів?",

        "a": {
            "1": "Лютий",
            "r": "Кожен місяць має",
            "3": "Липень",
            "4": "Жовтень"
        }

    },

    {
        "q": "Що можна побачити з заплющеними очима?",

        "a": {
            "r": "Сон",
            "2": "Майбутнє",
            "3": "Фільм",
            "4": "Відповіді до екзамену"
        }

    }

];





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

        
        
    }

    showQuestion(step);
    
}


