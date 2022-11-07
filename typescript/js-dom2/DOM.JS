//traversing the DOM: getting the parent or child elements and 
let itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentNode.parentNode);
itemList.parentNode.parentNode.style.backgroundColor = 'red';

//parentElement : same as node\\
// let itemListElement =
//takking on child nodes:
console.log(itemList.childNodes);//
//using children property:best used
console .log(itemList.children);
//firstchild
console.log(itemList.firstChild);
//firstElementChild:best used
console .log(itemList.firstElementChild);
//lastElementChild
console.log(itemList.lastElementChild);
// nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red';
//createElement
let newDiv = document.createElement('div');
//Addclass
newDiv.className = 'hello'
//ID
newDiv.id = 'hello1'
//add attribute
newDiv.title = 'title';// same as the one below
// newDiv.setAttribute('title','title');

//add a text to it : create text node
// let newDivText = document.createTextNode('Hello World');
// console.log(newDivText);
// newDiv.appendChild(newDivText);//add text to the div created
// console.log(newDiv);
// //add the div to the DOM 
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
//changing fontstyle
// newwdiv.style.fontsize='30px'
// console.log(newDiv);

// container.insertBefore(newDiv, h1);