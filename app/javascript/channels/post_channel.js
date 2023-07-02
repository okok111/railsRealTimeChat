import consumer from "./consumer"

const appRoom = consumer.subscriptions.create("PostChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    return alert(data['comment']);
  },

  speak: function(comment) {
    return this.perform('speak', {comment: comment});
  }

});

window.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    appRoom.speak(e.target.value);
    e.target.value = '';
    e.preventDefault();
  }
})