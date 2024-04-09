
    for (var i = 0; i < document.querySelectorAll(".button").length; i++){
    
        document.querySelectorAll(".button")[i].addEventListener("click", function(){
    
            var numerHTML = this.innerHTML;
            var buttonValue = this.value;
            localStorage.setItem('buttonValue', buttonValue);
            buttonAnimation(numerHTML);
    
            
    
        });
    }
    
    
    
    
    function buttonAnimation(currentKey){
    
        var activeButton = document.querySelector(".pressed");
    
        if (activeButton) {
            activeButton.classList.remove("pressed");
        
        }
    
        var currentButton = document.querySelector(".button" + currentKey);
        currentButton.classList.add("pressed");

    
        document.querySelector('.submit').addEventListener("click", function() {
            window.location.href = 'thankyou.html';           

    
        });
        
     }

    
    



