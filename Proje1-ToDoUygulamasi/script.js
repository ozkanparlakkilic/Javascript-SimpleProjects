
// UI Variables

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const deleteAll = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');
// const items = ['item 1','item 2','item 3','item 4'];
let items;


// load items
loadItems()


// call event listener
eventListeners()


function eventListeners()
{
    // submit event
    form.addEventListener('submit',addNewItem);

    // delete an item
    ul.addEventListener('click',deleteItem);

    // all delete 
    deleteAll.addEventListener('click',allDeleteItem);
}

function loadItems(){

    items = getItemsFromLS()
    items.forEach(function(item)
    {
        createItem(item);
    })
}

// get Items from Local Storage
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }

    return items;
}

// set Item from Local Storage
function setItemFromLS(text){
    
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

// delete item from LS
function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);
        }
        
    })

    localStorage.setItem('items',JSON.stringify(items));
}

//

function createItem(text){
    // create li element
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';

    // li inner text
    li.appendChild(document.createTextNode(text));

    // create a element
    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href','#')
    a.innerHTML = '<i class="fas fa-times"></i>'

    // add a to li
    li.appendChild(a);

    // add li to ul
    ul.appendChild(li); 
}

// add new item
function addNewItem(e){

    // console.log(input.value);

    if(input.value === ""){
        alert('add new item');
    }

    // create item
    createItem(input.value);

    // save to LS
    setItemFromLS(input.value);

    // clear input
    input.value = ''; 

    console.log(li);
    e.preventDefault();
    
}

// delete Item

function deleteItem(e){

    if(e.target.className === 'fas fa-times'){
        if(confirm('are you sure ?')) {
            //console.log(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.remove();

            // delete item from LS
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }
    
    e.preventDefault();
}

function allDeleteItem(e){

    li = document.querySelectorAll('#task-list>li');

    if(confirm('are you sure ?')) {
        li.forEach(function(item){
            //console.log(item);
            item.remove();
        })
        localStorage.clear();
    }
    e.preventDefault();
}