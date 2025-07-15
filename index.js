const display = document.getElementById('display');
        const calculator = document.getElementById('calculator');

        function appendValue(input) {
            display.value += input;
        }

        function clearDisplay() {
            display.value = "";
        }

        function calculateResult() {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = "error";
            }
        }

