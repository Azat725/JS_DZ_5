const speak = [
    "To", "be,", "or", "not", "to", "be,", "that", "is",
    "the", "question:", "Whether", "'tis", "nobler",
    "in", "the", "mind", "to", "suffer", "The", "slings",
    "and", "arrows", "of", "outrageous", "fortune,",
    "Or", "to", "take", "Arms", "against", "a", "sea",
    "of", "troubles,"
]

function typeWord (word) {
    return new Promise(resolve => {
        let i = 0;
        const interval = setInterval(() => {
            document.write(word[i]);
            i++;
            if (i === word.length) {
                clearInterval(interval);
                resolve();
            }
        }, 200)
    })
}

async function typeSpeak () {
    for (const word of speak) {
        await typeWord(word);
        document.write(' ');
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    document.write("<br>William Shakespeare, from &quotHamlet&quot")
}

typeSpeak()
