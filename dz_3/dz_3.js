let list = {
    values: ['Яблоко', 'Банан', 'Апельсин'],

    printList() {
        const sortedValues = this.values.slice().sort();
        document.write("<ol>");
        sortedValues.forEach(value => {
            document.write(`<li>${value}</li>`);
        });
        document.write("</ol>");
    },

    add(product) {
        this.values.push(product);
    }
}

list.printList();
