const formButton = document.querySelector('button'); // Selects the button
const formInput = document.querySelector('input');
const list = document.querySelector('ul');

//Note: this will not work if you have more than one elements on the page. In that case make use of classes and IDs

function addGoal() {
    const enteredValue = formInput.value;
    const listItem = document.createElement('li'); // createElement is a method for creating DOM elements
    listItem.textContent = enteredValue;
    list.appendChild(listItem);
    formInput = ''; //Resets the value of the input
    
}

formButton.addEventListener('click', addGoal); // Listen to click // 'addGoal' is not executed. It just points to it
