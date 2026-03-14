// IIFE Stands for Immediately Ivoked Function Experission 
//They dont need to be called, they called by themselves.

const  validateStatusCode_Arrow = (status) => {
    if(status >= 200 && status < 300){
        console.log("Request is fine");
    }
}
(function (){
    console.log("Hello");
})();