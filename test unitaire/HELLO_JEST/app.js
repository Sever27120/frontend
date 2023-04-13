
function isPalindrom(word){
    return true;
}

const forbiddenWords = ["nuls","nul","imbécile","imbéciles"];

function containForbiddenWords(message){
    const msg =message.splint("");
    let result =[];
    for (let index = 0; index<msg.length;index++){
        const item = msg[index];
        if(forbiddenWords.includes(item)){
            result.push(item);
        }
    }
    if(result.length>0){
        return true;
    }
    return false;
}
module.exports ={
   isPalindrom,
   containForbiddenWords
}