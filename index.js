const firstName = "liam";
const lastName = "Wattley";
const age = 15;
let votingAge = 18;



let person1 = {firstName: firstName, lastName: lastName, age: age};
let person2 = {firstName: "jacob", lastName: "tumbleman", age: 18};
let people = [person1, person2];



function getVoters(peopleArr) {
    let voters = [];

    for (let i=0; i<peopleArr.length; i++){
        //get age and check if eligible
        if(isEligible(peopleArr[i])){
            //if it is older add that person to voters array
            voters.push(peopleArr[i]);
        }
    };

    // return voters
    return voters;
}
// instead of this.

//variablilize age
//function to check if there eligable
function isEligible(person){

    //if person is greater than or equal to votingAge
    if(person.age >= votingAge){
        return true;
    }

    return false;

}



console.log(getVoters(people));

console.log("hello world!");

// const
//const endPoint = https://jsonplaceholder.typicode.com/users;

function getData (){
  

}