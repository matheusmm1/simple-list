const list = document.querySelector('#to-do-list ul');

// Remove from list

list.addEventListener('click', function(e) {
    if(e.target.className == 'delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    }
 });
// Add to the list

const addToDo = document.forms['add-to-list'];
const addButton = document.querySelector('#add-to-list button');
 
addToDo.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addToDo.querySelector('input[type="text"]').value;
    
    // Create elements

    const newList = document.createElement('li');
    const newToDo = document.createElement('span')
    const newDeleteBtn = document.createElement('span');
    
    //Adding style and text content to created elements
    
    newDeleteBtn.textContent='delete';
    newToDo.textContent=value;
    newToDo.className='to-do';
    newDeleteBtn.className='delete';

    // Adding elements to DOM

    list.appendChild(newList);
    newList.appendChild(newToDo);
    newList.appendChild(newDeleteBtn);

    //Clearing form box

    addToDo.reset();

   
})


