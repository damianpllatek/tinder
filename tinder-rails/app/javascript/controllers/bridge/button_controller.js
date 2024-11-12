import { BridgeComponent } from "@hotwired/strada"
// link_to "New message", new_message_path, "data-controller": "bridge--button", "data-bridge-ios-image": "plus.rectangle", "data-bridge-side": "right"
export default class extends BridgeComponent {
    static component = "button"
    connect() {
        this.element.classList.add("hidden")
        super.connect()
        this.#notifyBridgeOfConnect()
    }
    #notifyBridgeOfConnect() {
        const element = this.bridgeElement
        const image = element.bridgeAttribute("ios-image")
        const side = element.bridgeAttribute("side") || "right"
        this.send("connect", {title: element.title, image, side}, () => {
            this.element.click()
        })
    }
}
