import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"



const input = document.getElementById('input')
const resultInput = document.getElementById('result')



document.querySelectorAll('.charKey').forEach(function(charkeybtn){
    charkeybtn.addEventListener('click', handleButtonPress)
})
//limpar input
document.getElementById('clear').addEventListener('click', handleClearButton
)


input.addEventListener('keydown', handleTyping)

document.getElementById('equal').addEventListener('click', calculate)
//calcular

document.getElementById('copyToClipboard').addEventListener('click' , copyToClipboard)


//trocando temas
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher) 