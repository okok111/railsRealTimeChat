import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the message channel.")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("Disconnected from the message channel.")
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    const messageContainer = document.getElementById('message-container');
    const messageElement = document.createElement('p');
    messageElement.textContent = `${data.user}: ${data.content}`;
    messageContainer.appendChild(messageElement);
  },
  speak(message, roomId) {
    this.perform('speak', { message: message, room_id: roomId })
  }
});
