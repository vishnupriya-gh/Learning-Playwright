//if (ourStatusCose >=200 && ourstatusCode <300)
//Normal Function
function validateStatusCode(status){
    if(status >= 200 && status < 300){
        console.log("Request is fine");
    
    }
}
//Expression Function
const  validateStatusCode_exp = function(status){
    if(status >= 200 && status < 300){
        console.log("Request is fine");
    }
}

validateStatusCode(200);
validateStatusCode_exp(200);
