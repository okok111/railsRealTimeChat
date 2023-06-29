import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["messages", "input"]

  connect() {
    this.scrollMessagesToBottom()
  }

  scrollMessagesToBottom() {
    this.messagesTarget.scrollTop = this.messagesTarget.scrollHeight
  }

  submit(event) {
    event.preventDefault()
    const content = this.inputTarget.value.trim()

    if (content !== "") {
      // メッセージ送信の処理を実装してください

      this.inputTarget.value = ""
      this.inputTarget.focus()
    }
  }
}
