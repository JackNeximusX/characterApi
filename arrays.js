

// declaring arrays
let peopleNamesArr = ["Liam","Joe","Pop","Kate"];
let colorsArr = new Array(7);


// change index
colorsArr[0] = "red";
colorsArr[1] = "orange";
colorsArr[2] = "yellow";
colorsArr[3] = "green";
colorsArr[4] = "blue";
colorsArr[5] = "indigo";
colorsArr[6] = "violet";


// adding "Ace" to end of an array
peopleNamesArr.push("Ace"); 


// adding "Donny" to the front of an array
peopleNamesArr.unshift("Donny");

console.log(peopleNamesArr);



// pez despencer POP!!
// remove last item added to array
peopleNamesArr.pop();

console.log(peopleNamesArr);

console.log(peopleNamesArr[2]);


// remove "Joe"
peopleNamesArr.splice(2,1);

console.log(peopleNamesArr);


// sorts names alf
peopleNamesArr.sort();

console.log(peopleNamesArr);


    /* 

    function that gives an index of a string in an array, 
    pass the array, search the array, return index or other wise -1
    
    */

function getArrIndex(arr, searchTerm){

    // for however long the arrays is
    for(let i=0; i < arr.length; i++ ){

        //if that name is equal to the searchTerm
        if(arr[i] === searchTerm){
            // return that index number
            return i;
        }

    }


    // if not, return negitive one
    return -1;
}


// fix to were it doesn't match case
console.log(getArrIndex(peopleNamesArr, 'Kate'));



// shift alt down key
