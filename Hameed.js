class person{
    constructor (name,location,tribe){
this.name = name;
this.location = location;
this.tribe = tribe;
    }
//encapsulation
addFriends(friends){
    this.friends = friends;
}

applyForJob(sendCredentials){
    sendCredentials();
}
createDomeAccount(bank){
    console.log(`created dom acc for in ${bank}`);
}
}

//inheritance

class Student extends person{
    constructor(name,location,tribe,school,courseOfStudy){
        super(name,location,tribe)
        this.school = school;
        this.courseOfStudy =courseOfStudy;
    }

}
const Hameed = new Student(
  "Hameed",
   "Abuja",
    "Yoruba",
    "Nile university",
    "Computer science",
);

const John = new Student(
    "John",
    "undefined",
     "undefined",
     "Nile university",
     "undefined",

);
const James = new Student(
    "james",
    "undefined",
     "undefined",
     "Nile university",
     "undefined",
);

Hameed.addFriends([John, James]);
Hameed.applyForJob(( )=>{
    console.log(`i am ${Hameed.name} a ${Hameed.tribe}) living in ${Hameed.location}
    finished from ${Hameed.school} and studied ${Hameed.courseOfStudy}`);
    
});
Hameed.createDomeAccount("zenith bank")