const person1 = {
  name: "hakan",
  surname: "özoğlu",
  age: "30",
  location: "istanbul",
  gender: "man",
  score: 10,
  workingDays: 90,
  books: 1,
};
const person2 = {
  name: "akif",
  surname: "özoğlu",
  age: "32",
  location: "istanbul",
  gender: "man",
  score: 17,
  workingDays: 17,
  books: 9,
};
const person3 = {
  name: "beyza",
  surname: "özoğlu",
  age: "16",
  location: "trabzon",
  gender: "woman",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person4 = {
  name: "alp",
  surname: "öztürk",
  age: "28",
  location: "aydın",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person5 = {
  name: "serdar",
  surname: "çakır",
  age: "22",
  location: "istanbul",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};

const person6 = {
  name: "rümeysa",
  surname: "türkan",
  age: "22",
  location: "istanbul",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person7 = {
  name: "mehmet ali",
  surname: "tunay",
  age: "30",
  location: "istanbul",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person8 = {
  name: "furkan",
  surname: "atsan",
  age: "23",
  location: "ankara",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person9 = {
  name: "kader",
  surname: "arslan",
  age: "24",
  location: "adana",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};
const person10 = {
  name: "uğurcan",
  surname: "uçar",
  age: "24",
  location: "trabzon",
  gender: "man",
  score: 28,
  workingDays: 64,
  books: 178,
};

//pushing the given data to an array
let users = [];
users.push(person1,person2,person3,person4,person5,person6,person7,person8,person9,person10)
console.log(users)


//grouping the array by location using reduce method
const groupByLocation = (data,prop) => { //data is the array and prop is the object prop that we will group by
  return data.reduce((acc, obj) => { 
    const key = obj[prop]; // key gets the value of the prop
    if(!acc[key]){  // if the value does not exist it will creat a new array with the keyname of the prop value
      acc[key] = [];
    }
    acc[key].push(obj); // if the value of the prop exist it will push the object to the array
    return acc
  },{}); // all of the grouping will be created inside of an object
}

const personLocation = groupByLocation(users,"location"); 
console.log(personLocation);

// all of the comments above will be the same for the code below

const groupByName = (data, prop) => {
  return data.reduce((acc,obj) => {
    const key = obj[prop].charAt(0);
    if(!acc[key]){
      acc[key] = []
    }
    acc[key].push(obj);
    return acc
  },{})
};
const personName = groupByName(users,"name");
console.log(personName);