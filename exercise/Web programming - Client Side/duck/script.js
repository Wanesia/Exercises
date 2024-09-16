// Get elements from the DOM
const sendBtn = document.getElementById('send-btn');
const duck = document.getElementById('duck');
const txtArea = document.getElementById('txt-area');
const messagesList = document.getElementById('messages-list');
let messages = [];
const forceBtn = document.getElementById('force');

// Function to get the current date and time formatted as DD/MM/YYYY, HH:MM
function getFormattedTimestamp() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

// Check if there are stored messages in LocalStorage and load them
if (localStorage.getItem('messages')) {
    messages = JSON.parse(localStorage.getItem('messages'));
    messages.forEach(message => addMessageToList(message));
}
// Event listener to prompt for user's name when the page is loaded
window.addEventListener('load', function() {
    const userName = prompt('Please enter your name:');
    alert(`Mr Duck says hello to ${userName}`);

});

// Change duck image and log a message when duck is clicked (easter egg)
duck.addEventListener('click',function(){
    console.log('Dont touch mr Duck!');
    duck.src = 'duck2.png';
});

//Saves the message, adds to the list, and clears the text area
sendBtn.addEventListener('click', function() {
    const text = txtArea.value;
    if (text) {
        const timestamp = getFormattedTimestamp();
        const message = `${text} (${timestamp})`;
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
        addMessageToList(message);
        txtArea.value = '';
    }
});
// Function to add a message to the list of messages in the DOM
function addMessageToList(message) {
    const li = document.createElement('li');
    li.textContent = message;
    li.title = message;
    messagesList.appendChild(li);
}
// Fetch a random joke from the JokeAPI when 'force' button is clicked
forceBtn.addEventListener('click', function() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            if (data.type === 'single') {
                console.log(data.joke);
            }
            else if (data.type === 'twopart') {
                console.log(`${data.setup} - ${data.delivery}`);
            }
        })
        .catch(error => console.error('Error fetching joke:', error));
});
