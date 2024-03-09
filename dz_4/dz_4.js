class Button {
    constructor (text, btnClass) {
        this.text = text;
        this.btnClass = btnClass;
    }

    get value() {
        return this.text;
    }

    set value(newText) {
        this.text = newText;
    }

    show() {
        document.write(`<button type="button" class="${this.btnClass}">${this.text}</button>`);
    }
}

class ColorButton extends Button {
    constructor (text, btnClass, colorClass) {
        super(text, btnClass);
        this.colorClass = colorClass;
    }

    show () {
        document.write(`<button type="button" class="${this.btnClass} ${this.colorClass}">${this.text}</button>`);
    }
}

const btn1 = new Button("Click me", "btn");
btn1.show();

const btn2 = new Button("See more", "btn");
btn2.show();

const btnColor = new ColorButton("See more", "btn", "btn-danger");
btnColor.show();

btn1.value = "New Text";
btn2.show();