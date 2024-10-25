const votingAge = 18;
const currentState = "LA";
const currentCity = "Lake Charles";


// have boolean for if it id

let person1 = {firstName:"quinn", lastName:"peter", age:21, state:"LA", city:"Lake Charles"};
let person2 = {firstName:"kate", lastName:"peter", age:19, state:"LA", city:"Lake Charles"};
let person3 = {firstName:"alen", lastName:"pepper", age:11, state:"LA", city:"Lake Charles"};
let person4 = {firstName:"fate", lastName:"lecprocon", age:21, state:"LA", city:"Mississippie"};
let person5 = {firstName:"mike", lastName:"noker", age:22, state:"NY", city:"New York"};
const multiPeople = [person1,person2,person3,person4,person5];

function getVoters(type,people){

    let voters = [];
    
    for(let i=0; i < people.length; i++){
        if(isEligibleVoter(type,people[i])){
            voters.push(people[i]);
        }
    }

    return voters;

}

function isEligibleVoter(type,person){

    if(type === "Country"){
        if(person.age >= votingAge){
            return true;
        }
    }
    else if(type === "State"){
        if(person.age >= votingAge && person.state === currentState){
            return true;
        }
    }
    else if(type === "City"){
        if(person.age >= votingAge && person.state === currentState && person.city === currentCity){
            return true;
        }
    }
    return false;
}

console.log(getVoters("City",multiPeople));








