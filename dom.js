// make sure servise worker supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw_cached_site.js')
      .then(reg => console.log('registered'))
      .catch(e => console.log('e'));
  });
}

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// form submiting event
form.addEventListener('submit', addItem);

// filter
filter.addEventListener('keyup', filterItems);

//delete event
itemList.addEventListener('click', removeItem);

function filterItems(e) {
  // convert to lowercase
  let text = e.target.value.toLowerCase();

  let items = itemList.getElementsByTagName('li');

  // convert items by array
  Array.from(items).forEach(function(item) {
    let itemName = item.firstChild.textContent;

    if(itemName.toLowerCase().indexOf(text) !== -1) {
       item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })

}

function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function addItem(e) {
  e.preventDefault();

  // get input value
  let newItem = document.getElementById('item').value;

  // create new li element
  let li = document.createElement('li');
  li.className = 'list-group-item';

  // add text note with input value
  li.appendChild(document.createTextNode(newItem));

  // create delete button in new li
  let deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // append text to button
  deleteBtn.appendChild(document.createTextNode('X'));

  // append button to li
  li.appendChild(deleteBtn);

  // append li to ul
  itemList.appendChild(li);
}


// Examine the document object

//console.dir(document);
//document.title = 123;
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//document.all[10].textContent = 'Hello';
//console.log(document.forms);
//console.log(document.images);

// get element by id
//var headerik = document.getElementById('main-header');
//header.textContent = '123';
//headerik.innerHTML = '<h3>Hello</h3>';
//console.log(headerik);
//headerik.style.borderBottom = '2px solid red';

//GET ELEMENT BY CLASS NAME
//let items = document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent = 'HEllo';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';
//items.style.backgroundColor = 'grey'; - doesn't work
//for(let i = 0; i < items.length; i++) {
//  items[i].style.backgroundColor = 'yellow';
//}


// GET ELEMENT BY TAGS NAME
//let items = document.getElementsByTagName('li');
//console.log(items);
//items[1].textContent = 'HEllo';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';
//items.style.backgroundColor = 'grey'; - doesn't work
//for(let i = 0; i < items.length; i++) {
//  items[i].style.backgroundColor = 'yellow';
//}

// GET ELEMENT BY QUERY SELECTOR
//let element = document.querySelector('#main-header');
//element.style.borderBottom = 'solid 4px black';

//let input = document.querySelector('input');
//input.value = 'Hello';
//console.log(input);

//let lastLi = document.querySelector('li:last-child');
//lastLi.style.color = 'blue';

// QUERY SELECTOR ALL
//let titles = document.querySelectorAll('.title');
//console.log(titles);

//var odd = document.querySelectorAll('li:nth-child(odd');

//for(let i = 0; i < odd.length; i++) {
//  odd[i].style.backgroundColor = 'grey';
//}


// TRAVERSING THE DOM
//let itemList = document.querySelector('#items');
// parentNode
//console.log(itemList.parentNode.parentNode);
//itemList.parentNode.style.backgroundColor = 'grey';

// parentElement
//console.log(itemList.parentElement.parentElement);
//itemList.parentElement.style.backgroundColor = 'grey';

// childNodes
//console.log(itemList.childNodes);

// children
//console.log(itemList.children);

// firstChild
//console.log(itemList.lastChild);

// firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.innerText = 'Goods';

// NEXT SIBLING
//console.log(itemList.nextSibling);

// NEXT ELEMENT SIBLING
//console.log(itemList.nextElementSibling);
//itemList.nextElementSibling.style.textAlign = 'center';

// Previous Element Sibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.fontSize = '40px';

// Create ELEMENT
//
// let newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'Hello Div');
//
// let newDivText = document.createTextNode('Hello world');
// let childDiv = document.createElement('div');
// newDiv.appendChild(childDiv);
// newDiv.appendChild(newDivText);
//
//
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
//
// container.insertBefore(newDiv, h1);
//
//
//
// console.log(newDiv);
//
//let button = document.getElementById('button').addEventListener('click', buttonClick);

//function buttonClick(e) {
  //document.getElementById('header-title').textContent = 'change';
  //document.querySelector('.list-group-item').style.backgroundColor = 'grey';
  //console.log(e.target.className);
  //console.log(e.type);
  //console.log(e.offsetX);
  //console.log(e.altKey);

 // let output = document.querySelector('.output');
  //output.innerHTML = `<h3>${e.target.id}</h3>`
//}
/*
let button = document.getElementById('button').addEventListener('mouseup', runEvent);

function runEvent(e) {
  console.log('EVENT TYPE:' + e.type);
}
*/

//let box = document.getElementById('box');
//box.addEventListener('mousemove', runEvent);
//box.addEventListener('mouseleave', runEvent);

/*var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

select.addEventListener('change', runEvent);
itemInput.addEventListener('cut', runEvent);
form.addEventListener('submit', runEvent);

function runEvent(e) {
  e.preventDefault();
   console.log('EVENT TYPE:' + e.type);*/
  //
  //  output.innerHTML = '<h3>Mouse X: ' +e.offsetX + '</h3> <br> <h3>Mouse Y:'+ e.offsetY + '</h3>';
  //
  //  //box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
  // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
//}
