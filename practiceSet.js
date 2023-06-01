const prompt = require("prompt-sync")({ sigint: true });
let marks={
    harry:78,
    am:76,
    kd:35,
    ps:56
}
for(let i=0; i<Object.keys(marks).length; i++){/*'Object.keys(marks).length' this will give the length of object's keys
                                               length our case its 4 'Object.keys(marks)' store the keys of mark object
                                               in array the .length find the size of array*/
    console.log("marks of "+Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]]);
    //'Object.keys(marks)[i]' its printing the keys(0->harry,1->am,2->kd,3->ps) of their corresponding index
    //'marks[Object.keys(marks)[i]]' this is printing corresponding keys value
}
for(let key in marks){//'key' is user defined above 'keys' is pre defined
    // in this program you can see the difference of for-in and for loop
    console.log("marks of "+key+" is "+marks[key]);
}
let correctNum=47;
let c,d,i=1;
d=correctNum%10;
let start=correctNum-d,end=start+10;
console.log("hint: Correct number is between "+start+" and "+end);
while(c!=correctNum){
    c = prompt('enter correct number: ');
    i++
}
console.log("you answered it in "+i+" attempts");

