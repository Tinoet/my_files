console.log('hello world');
2+3
// build web/mobile apps, real-time networking apps, command line tools
// browsers have javascript engines- firefox(spider-monkey), chrome(v8)
// how a website behaves
// executing a code in node.js


//variables-used for storing data temporarily 
// declaring variables
let name = 'Elijah';
console.log(name);

//value of a const doesnt change
const interestRate =0.33;
//primitive types: 
//strings
let firstName = 'Elijah';
let age = 30//number literal
let isApproved = true //boolean litereal
console.log( firstName,age,isApproved)
//undefined
let myPet = undefined;
console.log(myPet)
//null

// dynamic typing is used in javascript


//reference types:objects arrays and function
//objects:
let person = {
    surName : 'Elijah',
    mainAge : 40
} ;

//to access the properties of an object we use the dot notation
person.surName = 'Uroko';
person[2]= {
    otherNames : 'Tinoet'
};
console.log(person.surName, person.otherNames); // we can also read the value of a property
//we can also use bracket notation to access the property of an objects 
console.log(person);
//[] squarebrackets are called array(datastructure) literals and are use to indicate empty arrays(list)
let selectedColors= ['red','blue'];
selectedColors[2]='green'
// in javascript we can have multiple values in an array unlike other programming languages
selectedColors[3]=5;

console.log(selectedColors.length)//indexing the property of a list

//functions:a set of statements that performs a task or calculates a value
//the function key word with a name,{} body of the function, used to define all the logic in the application
function greet (){
    console.log('hello world');
}
//to display the function or call the function
greet()
//inputs change how the function behaves: put a parameter between() and such parameter only works inside the {}  
function  display(name){
    console.log('hello' + name);
}
// when displaying the function we use an argument to represent the parameter as such the function displays the argument together with the name passed
display(' Tochukwu')
//you can use it twice
display(' Tino')
//A function can have multiple parameters 
function  show(name, lastName){
    console.log('hello' + name +  '' + lastName);
}
show(' Tochukwu' , ' Elijah');

//types of function
//calculating a value
function square(number){
    return number * number;
}
console.log(square(2));


let number = square(2);
console.log(number);//you can also use the return function to declare a variable
//to do a calculation we should apply the 'return' keyword inside the {} where the body of the function is displayed
// alert('welcome');

// mdn-mozilla docs for javascript
console.warn('this is a warning')
console.info('hello')
// alert('welcome to my website');

//concatenating strings

const momName = 'Edith'
const momAge = 30

//we can use concatenations to add valuues to this 
// using '' or
console.log("My mom's name is " + momName + ' and she is ' + momAge)
// using back ticks
console.log(`my mom's name is ${momName} and she is ${momAge} `)
let countryName = 'Nigeria'
let independence = 1960
console.log("The name of my contry is " + countryName + " and she had her independence in the year " + independence);
console.log(`The name of my contry is ${countryName } and she got her independence in the year ${independence}`)
//strings property
const strings = 'hello Eze';
console.log(strings.indexOf(''));

/* multi line comments
 */

//arrays
//constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

//c
const fruits = ['apple', 'mango', 'orange'];
fruits.push('pear')
// fruits.reverse()
fruits.unshift('cashew')
fruits.push('fruits')
//.pop used to remove the last item in a list
console.log(fruits.indexOf('apple'));
console.log(Array.isArray(['fruits']));//check if an element is in an array


console.log(fruits);

const elijahTochi = {
    namee: 'et',
    tAge: 25,
    hobbies:['movies', 'sleeping', 'reading'],
    address:{
        street: 'acharalayout',
        no: 17,

    },
    moviesTitle:{
        title:['pirates of the carribean','home coming']
    }
};
const hobbies = console.log(elijahTochi.hobbies); 
console.log(elijahTochi.address.street)
//destructuring: basically use the dot notation
const {namee,address:{street}} = elijahTochi; 
console.log(street)
console.log(elijahTochi.moviesTitle.title[1])
//add property
elijahTochi.email = 'elijahtinoet@gmail' //directly adding properties
console.log(elijahTochi.hobbies[1])
const todos =[
    {
    id:1,
    text:'take out trash',
    isCompleted: true
    },
    {
    id:2,
    text:'meeting with boss',
    isCompleted: true
    },
    {
    id:3,
    text:'do a project',
    isCompleted: false
    },
    {
    id:3,
    text:'create an app',
    isCompleted: false
    }
];
console.log(todos[3].text);//selecting properties
//JSON: A data format in fsd/api for sending and receiving data in json format
//in JSON we can only use double quotes around keywords
const todoJson = JSON.stringify(todos); //stringify converts objects to a JSON strings
console.log(todoJson);
//for loops
//in for loops we use the 'for' keyword followed by(which contains the value or operator to be assigned, the condition, and then the increment operator )

for (let x = 1; x <10 ; x++) {
    console.log(`for loop: ${x}`);
    
}
for(let a =3; a <=5; a++){
    console.log(a);
};

for (let c= 2; c < 15; c++){
console.log(`here is another for loop ${c}`);
}
let w = 10;
while(w <= 20){
    console.log(w);
    w++;
};

for (let activities of todos){
 console.log(activities.text);
};



//while loop
let i = 1;
while (i <=15){
    console.log(`while loop: ${i}`);
    i++;
}
//for of
for (let todo of todos){
    console.log(todo.isCompleted); //calling up ojects of an array
}
for(let todo of todos){
console.log(todo.text);
}//loopiing through arrays


let d =3;
while (d<= 10){
    console.log(`another while loop ${d}`);
        d++;
}

for(let z = 1; z<= 5; z++){
    console.log(`still for loop ${z}`);
}

for( let done of todos){
    console.log(done.isCompleted);

}
let e =4;
while(e <= 10){
    console.log(`practicing while loop${e}`);
    e++;
}

//high order array methods: doing iteration with arrays
//foreach(loops through),map(allows to create new array from an array), filter(creates an array based on a condition)
//for each: array name.foreach(a function(variable name

todos.forEach(function(todo){
    console.log(todo.text);
});
todos.for

//map : arrayname.map(a function(variable){console.log})
//add a const and a return(variable name and the array you want to return) and a console .log() outside the {}
const toDo = todos.map(function(todo){
    return todo.text
});
console.log(toDo);

//filter: arrayname.filter(a function(variable name){console.log})
//add a const and a return(variable name and the array you want to return) and a console .log() outside the {}
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === false;
});
console.log(todoCompleted);

//condtionals
// === is used to match the data types in condiitionals
// == match the value types 
//if statements : assign a const variable followed by the if statement and the condition (in a paranthesis) then parse the argument in curly braces{console.log}
const x = 10;
if (x === 10) {
    console.log('x is ten');
}
// if else statements: all conditions as in if statement wiith an adddition of the else condition
const c = 20;
if (c === 10){
    console.log('c is 10');
}else{
    console.log('c is not 10');

}

// elseif for further conditions... the else if is added at the middle of the if and else statements    
const g = 30;
if (g === 10) {
    console.log('g is 10'); }
    else if(g < 10){
        console.log('g is less than 10');
    }
    else{console.log('g is greater than 10')}
// || is the or charater, && = and
// when we use or(||) one condition must be true
const s =10;
const t = 7;
if (t > 5 || s > 10){
    console.log('t is more than 5 or s is more than 10');
}//nothing is shown because none of those conditions are true
// but if we have the &&(operator) both must be true for it print
const gr = 6;
const tr = 11;
if (gr > 5 && tr > 10){
    console.log('tr is more than 10 and gr is more than 5');
}

// tenary operator:shorthand if statement used to assign a variable based on a condition
// declare a variale using const, declare another const followed by the condition then ?, and then print a variable
const fg = "Corrupt";
const citizen = fg === "Corrupt" ? `citizens are seeing shege ` : `citizens are living fine`; 
console.log(citizen);
 
//swith : used for evaluating conditions
const got =10;
const color = got > 10 ? 'red': 'blue';
console.log(color);
switch(color){
    case 'red': //if color is red 
        console.log('color is red');
        break;
    case 'blue'://if  color is blue
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT blue or red');
        break
};

//function: arrow function

//OOP: constructor function // ES six 'class'
//ES six functions

// constructor function: you can use this to create data anywhere after assignment

// function Elijah(myName,familyName,dob){
//     this.myName = myName;
//     this.familyName = familyName;
//     this.dob = new Date(dob);
//     // this.hobbies1 = hobbies1;
//     //addin methods which are basically jusst functions to this person object 
//     // this.getBirthYear = function (){
//     //     return this.dob.getFullYear();
//     // }
//     // this.getName = function(){
//     //     return ` ${this.myName} ${this.familyName}`;
//     // }
// };

// Elijah.prototype.getName = function (){
//     return ` ${this.myName} ${this.familyName}`;
// };
// Elijah.prototype.getBirthYear = function (){
//     return this.dob.getFullYear();
// };


//classes same but ES6
class Elijah{
    constructor (myName,familyName,dob,anthem){
        this.myName = myName;
        this.familyName = familyName;
        this.dob = new Date(dob);
        this.anthem = anthem;
    }
    getBirthYear (){
        return this.dob.getFullYear();
    };
    getName(){
        return ` ${this.myName} ${this.familyName}`;
    };
    getAnthem(){
        return this.anthem
    };
};
//instantiate objects: that use objects 
const Elijah1 = new Elijah('Eli','Tino', '1-19-1997', 'Hail o! Bigard');
console.log(Elijah1);
//adding methods
console.log(Elijah1.getName());
console.log(Elijah1.getBirthYear());
console.log(Elijah1.getAnthem());

//prototypes
//DOM: tree structure of a html document

//selection: single element selectors&&multiple element selectors

//single selectors
// console.log (document.getElementById('my-form'));
// console.log(document.querySelector('h1'))
//multiple selectors
// const items =  document.querySelectorAll('.items');
// //use query selectors all in order to add effects to the element
// items.forEach((item) => console.log(item));


// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Elijah';
// //changing the style 

// const btn = document.querySelector('.btn');
// btn.style.background = 'red'

//creating eventlistener
// const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e) =>{
//     e.preventDefault();
    
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInpu7t = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault(); //for submit
    //dont submit until both forms are filled up
    if (nameInput.value==='' || emailInput.value===''){
        msg.classList.add('.error');
        msg.innerHTML = 'please enter your name'

        //to make the above disappear it disappear
         setTimeout(()=> msg.remove(),3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    };

    
}