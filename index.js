const string = 'Hello!'

function shout(string) {
    return string.toUpperCase();
}


function whisper(string) {
    return string.toLowerCase();
}

console.log(shout(string));
console.log(whisper(string));

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) 
        return "I can't hear you!";
    
    if (string === string.toUpperCase()) 
        return "YES INDEED!";
    
    if (string === "I love you, Grandma.") 
        return "I love you, too.";
}

console.log(sayHiToGrandma("I love you, Grandma."));