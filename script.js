// Display manipulation functions
function append(character) {
    document.getElementById("display").value += character;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteChar() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

// Main calculation function
function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error!";
    }
}
