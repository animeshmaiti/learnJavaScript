let name1=' animesh'
let name2 = "harry"
console.log(name2,name1);//string can declare in single quote and double quote
// template literals
let sentence = `${name1} is following ${name2}`//`` this is called back ticks
console.log(sentence);
// escape sequence character
console.log("hello\" how are you")
console.log("hello\nhow are you")//new line 
console.log("hello\thow are you")//tab
console.log("hello\rhow are you")//carriage return
let word='hello\" how are you?'
console.log(word.length);//give the length of string exclude escape sequence character include space
console.log(word.toUpperCase());//toUpperCase() function convert letters to uppercase
console.log(word[1]);//access a character using idex of their position index start with '0'.
console.log(word.slice(2));// it will slice index 2 to end of string if you give 1 argument 
console.log(word.slice(2,6));//here we give 2 arguments in this case it slice index 2 to before 6 index and print
console.log(word.replace('hello','bye'));//replace hello with bye and its case sensitive include space
console.log(word.concat(name1,' ok'));//join the name1 variable's string and 'ok' with word variable string
let friend1 ='   kunal hi   '
console.log(friend1.trim());//it remove the spaces starting and end of the string not in between spaces
//original string is not mutable you can not change original string with string methods
friend1='prakash'//this is possible it is not a string method it update the friend1 value
console.log(friend1);
friend1[3]='78'/*this is not possible string methods return a new string with their
                methods but can not change the original string*/
console.log(friend1);
let sentence2='a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement'
let word2='complete'
console.log(sentence2.includes(word2));//it returns true or false that 'complete' word is include this sentence2 string or not
//we can use this like 
console.log(`the word "${word2}" ${sentence2.includes(word2) ? 'is':'is not'} in the sentences`);/*use of ternary operator
and literal templates checking the word is include in the sentence or not */
let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("Hello"));/*The startsWith() method returns true if a string starts with a 
specified string. Otherwise it returns false*/
console.log(text.startsWith("world", 6));//checking Start at position 6 or not(start count with 0)