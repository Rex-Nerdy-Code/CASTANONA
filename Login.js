

    // Get the modal 
    
    var modal = document.getElementById
    ('id01');
    
    // When the user clicks anywhere
    //outside of the modal, close it 
    
    window.onclick = function(event) {
        if (event.target == modal) {
         modal.style.display = "none";
        }
    }
    window.onload = function_name();


    function check_lengths(len){
        function check_username(userName){
            userName = document.querySelector(".user").value; 
            if(userName.length>15){
                alert("userName too long");
            }
            else if(userName.length<=4 && userName.length>=1){
                alert("username too short");
            }
            else if(userName.length==0){
                alert("username field cannot be empty");
            }
        }
        function check_password(passkey, upperCase, lowerCase, Number, special_char){
            fun
            passkey = document.querySelector(".passkey").value;
            if(passkey.length<=6 && passkey.length>=1){
                alert("password length must be greater than 6");
            }
            else if(passkey.length==0){
                alert("password field must not be empty");
            }
        }

        check_username();
        check_password();
        
        var submitBtn = document.querySelector(".login");
              
    }
    check_lengths();