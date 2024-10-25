



// string variables
let name1 = "latermin";
let sentence1 = "My dog is a shade of dark jade.";
let sectnece2 = "The word 'coffee' has six letters."


//  evaluate the length of keyword and log a massage
function evalKeyword(keyword){
    // if key word is a NOT a string;
    if(typeof keyword !== `string` || keyword.length === 0 ){
        // give this message
        console.log("thats not a WORD...")
    }else{
        // otherwise give this massage
        let evalSentence ='The word "' + keyword + '" has ' + keyword.length + " letters."; // the length should be ethat a number or a letter
        console.log(evalSentence);
    }
}


evalKeyword();// no *argumant???
evalKeyword("")// empty string
evalKeyword("Pantrea Leo");// string 
evalKeyword(280);// numbers
evalKeyword("12345");// number in a string this. this should NOT be a word

