var storedButton = localStorage.getItem('buttonValue');
            if (storedButton) {
                document.querySelector(".selected").textContent = "You have selected " + storedButton + " out of 5";
            }