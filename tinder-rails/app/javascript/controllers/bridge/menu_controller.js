import { BridgeComponent } from "@hotwired/strada"

// This Stimulus controller interfaces with the iOS MenuComponent to present a native selection menu
export default class extends BridgeComponent {
    static component = "menu"

    connect() {
        super.connect()
        const selectElement = this.element
        if (selectElement) {
            selectElement.addEventListener("mousedown", this.#handleSelectClick.bind(this))
            this.element.addEventListener("item:selected", this.#handleItemSelected.bind(this))
        }
    }

    #handleSelectClick(event) {
        event.preventDefault()
        this.#notifyBridgeOfConnect()
    }

    #notifyBridgeOfConnect() {
        const title = this.data.get("title") || "Select an Option";
        const items = JSON.parse(this.data.get("items") || "[]");

        this.send("display", { title, items }, (response) => {
            const selectedValue = response.selectedValue; // Assuming you get a 'selectedValue' from response
            this.element.dispatchEvent(new CustomEvent("item:selected", { detail: { selectedValue }, bubbles: true }));
        });
    }

    #handleItemSelected(event) {
        const selectedIndex = event.detail.selectedIndex
        const options = this.element.options
        if (options && selectedIndex != null) {
            options.selectedIndex = selectedIndex
        }
    }
}