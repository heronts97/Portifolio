import calculate from "./calculate.js"

const input = document.querySelector('#input')

export function handleButtonPress(ev) {

    const value = ev.currentTarget.dataset.value
    input.value += value
}

export function handleClearButton(){
    input.value = ''
    input.focus()
}

export function handleTyping(ev){
    ev.preventDefault() // previniar ou anular a funçao do evento

    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

    if (allowedKeys.includes(ev.key)){
        // se a tecla pressionada estiver dentro do array allowedkeys, esse nao sera anulada
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter'){
        calculate()
    }
}