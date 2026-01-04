function passwordValidator(password){
    let isCorrectLength = checkIsCorrectLength();
    let isAlphanumeric = checkIsAlphanumeric();
    let isHas2Digits = checkHas2Digits();

    if(isCorrectLength && isAlphanumeric && isHas2Digits){
        console.log(`Password is valid`);
    }

    function checkIsCorrectLength(){
        if(password.length >= 6 && password.length <= 10){
            return true;
        } else{
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
    }

     function checkIsAlphanumeric(){
            let pattern = /^\w+$/;

            if(pattern.test(password)){
                return true;
            } else {
                console.log(`Password must consist only of letters and digits`);
                return false;
            }
        }

        function checkHas2Digits(){
            let pattern = /\d{2,}/;

              if(pattern.test(password)){
                return true;
            } else {
                console.log(`Password must have at least 2 digits`);
                return false;
            }
        }
}

passwordValidator('logIn')