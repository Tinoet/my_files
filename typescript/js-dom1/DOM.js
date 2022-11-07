//examine the objects
// console.dir(document);
console.log(document.domain);//checking the domain
console.log(document.URL);//checking the url
// //since its not a read only we can change the elements or attributes or tags
document.title= 'JavaScript-DOM';
console.log(document.title);// checking the page title 
console.log(document.doctype);// checking the   doctype
console.log(document.head);// checking the head and body
// console.log(document.body);// checking the body
// console.log(document.all);// checking the documents in the DOM
// console.log(document.all[12]);//selecting items using index
// console.log(document.forms);// checking the
// console.log(document.forms[0]);// checking the elements
// console.log(document.images);// checking the images
// //selectors for querying the DOM
// //getElementByID
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
// console.log(headerTitle);// checking the
console.log(header);// checking the header of a document
// // affecting the content of the elements in the header
// //innertext is different from the textcontent because it affects the style
// headerTitle.innerText = 'Item Lister';
// headerTitle.style.backgroundColor = 'lightgreen';
// //innerHtml:putting a html into an html
// //changing the style
// //here the header style is changed and it is targetted using the header variable created from above
// header.style.borderBottom = 'solid 3px #000'

// //selector: getElementsByClassNames
const items = document.getElementsByClassName('list-group-item');// getting elements by classNames gets the HTML collection
console.log(items);
items[1].style.backgroundColor = 'yellow'
// // //styling the elements when already styled
// // for (let i=0; i<items.length;i++){
// //     items[i].style.backgroundColor = '#f4f4f4';
// // };

// //selector: getElementsByTagNames
// let li = document.getElementsByTagName('li')
// console.log(li);
// li[1].style.backgroundColor = 'lightgreen';
// //to overwrite the above incase you want to make changes to the whole li
// for (let i =0;i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// };

// //quarySelector:gets only the first element in the DOM
// let head = document.querySelector('#main-header');
// header.style.fontStyle = 'italic';

// //selecting with queryselector using the css elements
// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send'
// //
// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// //to select all of the properties of the elements(liike last child or nth child or more) 
// let lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// //using css pseudo classes/selectors
// let secondItem = document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// //querySelectorAll: takes more than one element :you can run array functions
// let allTitles = document.querySelectorAll('.title');
// console.log(allTitles);
// allTitles[0].style.fontStyle = 'italic';








