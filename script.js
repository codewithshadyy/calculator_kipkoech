const display= document.getElementById('display')
function clearDisplay() {
    display.value = ''
    
}
function appendToDisplay(value) {
    display.value += value
    
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Syntax Error';
    }

    
}
function deleteDisplay() { 
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1)
    
}
