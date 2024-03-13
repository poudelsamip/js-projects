let output = document.querySelector('.output');
let buttons = document.querySelectorAll('button');
let operators = document.querySelectorAll('.operator');
let equal = document.querySelector('.e-operator');

const appendNumber = (number) => {
    output.innerHTML += number;
}

buttons.forEach(button => {
    button.addEventListener("click",() => {
        appendNumber(button.value);
    });
});

const clearDisplay = ()=> {
    output.innerHTML = "";
};

operators.forEach(operator => {
    operator.addEventListener('click',() => {
        let lastChar = output.innerHTML.slice(-1);

        if(operator.innerHTML == 'AC'){
            clearDisplay();
            return;
        }
        
        if(operator.innerHTML == 'DEL'){
            output.innerHTML = output.innerHTML.slice(0, -1);
            return;
        }

        if(!isNaN(lastChar) || lastChar == '.'){
            appendNumber(operator.innerHTML);
        }
    });
});

equal.addEventListener('click',() => {
    output.innerHTML = eval(output.innerHTML);
});
