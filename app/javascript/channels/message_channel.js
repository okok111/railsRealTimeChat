import consumer from "./consumer"

const appMessage = consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    return alert(data['message']);
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("Disconnected from the message channel.")
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    // const messageContainer = document.getElementById('message-container');
    // const messageElement = document.createElement('p');
    // messageElement.textContent = `${data.user}: ${data.content}`;
    // messageContainer.appendChild(messageElement);
    const messages = document.getElementById('messages');
    messages.insertAdjacentHTML('beforeend', data['message'])
  },
  speak(message) {
    return this.perform('speak', { message: message})
  }
});

window.addEventListener("keypress", function(e) {
  if (e.keyCode === 13 ) {
    appMessage.speak(e.target.value);
    e.target.value = '';
    e.preventDefault();
  }
})