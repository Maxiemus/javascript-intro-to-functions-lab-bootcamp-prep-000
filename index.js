//A function that takes a string and returns it in all uppercase.
function shout(string) {
  return string.toUpperCase();
}

//A function that takes a string and returns it in all lowercase.
function whisper(string) {
  return string.toLowerCase();
}

//A function that calls console.log() with shout function.
function logShout(string) {
  console.log(shout(string));
}

//A function that calls console.log() with whisper function.
function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  var output;
  if ( string === string.toLowerCase) {
    output = "I can't hear you!"
  }
  return output;
}