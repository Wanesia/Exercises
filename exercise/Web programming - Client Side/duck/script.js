const sendBtn = document.getElementById('send-btn');
const duck = document.getElementById('duck');
const txtArea = document.getElementById('txt-area');
const messagesList = document.getElementById('messages-list');
let messages = [];
const forceBtn = document.getElementById('force');

function getFormattedTimestamp() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

if (localStorage.getItem('messages')) {
    messages = JSON.parse(localStorage.getItem('messages'));
    messages.forEach(message => addMessageToList(message));
}
window.addEventListener('load', function() {
    const userName = prompt('Please enter your name:');
    alert(`Mr Duck says hello to ${userName}`);

});


duck.addEventListener('click',function(){
    console.log('Dont touch mr Duck!');
    duck.src = 'duck2.png';
});
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
function addMessageToList(message) {
    const li = document.createElement('li');
    li.textContent = message;
    li.title = message;
    messagesList.appendChild(li);
}

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