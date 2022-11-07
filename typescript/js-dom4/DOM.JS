let form = document.getElementById('addForm');
let  itemList = document.getElementById('items');


//form submit event
form.addEventListener('submit', addItem );

//addItem
function addItem(e) {
    e.preventDefault();
    
    // console.log(1);
    //get input value
    let newItem = document.getElementById('items').value;
    //create new element
    let li = document.createElement('li');
    //add className
    li.className = 'list-group-item';
    // console.log(li);
    //create text with input value
    li.appendChild(document.createTextNode(newItem));
    //create deleteBtn element
    let deleteBtn = document.createElement('button');
    //add className to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //add(appendtextNode)
    deleteBtn.appendChild(document.createTextNode('X'));
    //add(appen) button to li
    li.appendChild(deleteBtn);
    //append(add) li to list
    itemList.appendChild(li);
};

//to remove item from an event
itemList.addEventListener('click', removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
};

//filter items
let filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);
function filterItems(e) {
    //convert to lower case
    let text = e.target.value.toLowerCase();
    // console.log(text);
    //convert to an array to be able to look for a particular item
    let listItems = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(listItems).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display='none';
        }
    })
};