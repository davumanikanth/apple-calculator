const display = document.getElementById("display");

function appendToDisplay(input) {
    
        display.value += input;
    
}

function clearDisplay() {

        display.value = "";
    
}

function calculate() {

        try {
            // Only allow numbers and basic operators for safety
        
                display.value = eval(display.value);
            } 
        catch (error) {
            display.value = "Error";
        }
    
}