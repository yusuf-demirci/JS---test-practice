const capitalize = (text) => {
    if (!text) return
    if (typeof(text) !== "string") return text
    return text[0].toUpperCase() + text.slice(1)
}

const reverseString = (text) => {
    if (typeof text !== "string") return text;
    return [...text].reverse().join("")
} 

const calculator = {
    add: (a, b) => {
        if (typeof a !== "number" || typeof b !== "number") {
            return "Invalid input";
        }
        return a + b;
    },
    substract: (a, b) => {
        if (typeof(a) !== "number" || typeof(b) !== "number") {
            return "Invalid input";
        }
        return a - b;
    },
    multiply: (a, b) => {
        if (typeof(a) !== "number" || typeof(b) !== "number") {
            return "Invalid input";
        }
        return a * b;
    },
    divide: (a, b) => {
        if (typeof(a) !== "number" || typeof(b) !== "number") {
            return "Invalid input";
        } else if (b === 0) {
            return "Zero division error"
        }
        return a / b;
    }
};

const caesarCipher = (text, shift) => {
    if (typeof (text) !== "string" || typeof (shift) !== "number") return "Invalid input"
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let cipheredText = ""

    text.toLowerCase().split("").forEach((letter) => {
        if (letter.toLowerCase() === letter.toUpperCase()) {
            cipheredText += letter
        } else {
            let numberToShift =
                alphabet.indexOf(letter) + shift < 0
                    ? shift + 26
                    : shift
            
            cipheredText += alphabet[(alphabet.indexOf(letter) + numberToShift) % 26]
        }
    })

    return cipheredText
}

const analyzeArray = (numArray) => {
    let average = (numArray.reduce(((acc, cur) => acc + cur), 0) / numArray.length) || undefined;
    let min = Math.min(...numArray) === Infinity ? undefined : Math.min(...numArray);
    let max = Math.max(...numArray) === -Infinity ? undefined : Math.max(...numArray);
    let length = numArray.length || undefined

    return {
        average,
        min,
        max,
        length
    }
}

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray}

