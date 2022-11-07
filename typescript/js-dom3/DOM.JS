//event listener
// create a variable
// getElementById('id here')
//.add an eventListener(event,function): this is what happens when a specified action takes place on the web
// then run a function(){}
// let button = document.getElementById('button').addEventListener('click', function(){
    //     console.log(123);
    // });//
    // one can decide to use a named function
    //DOM maniplation
//     let button = document.getElementById('button').addEventListener
//     ('click',buttonClick);//using a named function

//     function buttonClick(){
//         // console.log('Button clicked')
//         //inside here you can choose to lo any event to your page to make it interactive
//         //manipulating the DOM
//         document.getElementById('header-title').textContent = 'Done';//using getElementById('');
//         document.querySelector('#main').style.backgroundColor = '#f4f4f4';//using queryselector
// };

let button = document.getElementById('button').addEventListener
('click',buttonClick);//using a named function
//events parameter: when you listen for an event and you run a function, you can pass an event('e')
function buttonClick(e){
    // document.getElementById('header-title').textContent = 'Done';//using getElementById('');
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';//using queryselector
    // console.log(e);
    console.log(e.target);//gives us the element instead of the input or whatever element the event was fired from
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.type);//tells us the kind of event that it is
    //getting mouse position
    console.log(e.clientX);// position from the topleft of the browser window 
    console.log(e.clientY);// position from the topright of the browser window 
    //getting mose position from the actual element
    console.log(e.offsetX);
    //mouse function: checking if when you click a function if a function key(alt,ctrl,shift) is clicked
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);

};

//mouse events
let button1 = document.getElementById('button');
button1.addEventListener
('click',runEvent);// click event
button1.addEventListener
('dblclick',runEvent);//double click event
// button1.addEventListener
// ('mousedown',runEvent);//mousedown click event
button1.addEventListener
('mouseup',runEvent);//mouseup click event


//events
let box = document.getElementById('box');
box.addEventListener('mouseenter',runEvent);// for the element
box.addEventListener('mouseleave',runEvent);
box.addEventListener('mouseover',runEvent);//only for any inner element
box.addEventListener('mouseout',runEvent);
box.addEventListener('mousemove',runEvent);

function runEvent(e){
    e.preventDefualt();
console.log('EVENT TYPE:'+e.type);

// output.innerHtml = '<h3>MouseX: ' +e.offsetX+ '</h3> <h3>MouseY:'
//  +e.offsetY+'</h3>';

// document.body.style.backgroundColor = "rgb( "+e.offsetX+","+e.offsetY+",40)";
// box.style.backgroundColor = "rgb( "+e.offsetX+","+e.offsetY+",40)";

}
dddddddd
//keyboard events
let itemInput =document.querySelector('input[type="text"]');
let form = document.querySelector('form');
form.addEventListener('submit', runEvent);

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);
itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);
itemInput.addEventListener('input', runEvent);
itemInput.addEventListener('focus', runEvent);//when you click inside an input
itemInput.addEventListener('blur', runEvent);//when you click outside an input
function runEvent(e){
// console.log(e.target.value);
// document.getElementById('output').innerHTML= '<h3>'+e.target.value+'</h3>';//puts the text out on the sreen aside in the input
e.preventDefualt();
console.log('EVENT TYPE:'+e.type);
};

let select = document.querySelector('select');
select.addEventListener('change', runEvent);
function runEvent(e){
console.log(e.target.value);//to get the value of whats inside of a box but it should be inside a function
};// for us to get the 



