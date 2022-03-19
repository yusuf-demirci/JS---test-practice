import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./index"

describe("capitalize function check", () => {
    it("should exist", () => {
        expect(capitalize).toBeDefined();
    });

    it("should capitalize string", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    it("should capitalize string with number", () => {
        expect(capitalize("123hello")).toBe("123hello");
    });

    it("should return value if type not string", () => {
        expect(capitalize(["a", 2])).toEqual(["a", 2]);
    });

    it("should return nothing if no input given", () => {
        expect(capitalize()).toBe(undefined);
    });
});

describe("reverseString function check", () => {
    it("should reverse string", () => {
        expect(reverseString("Welcome to Clarusway!")).toBe("!yawsuralC ot emocleW")
    })

    it("should reverse string with numbers", () => {
        expect(reverseString("1Welcome to Clarusway!3")).toBe(
            "3!yawsuralC ot emocleW1"
        );
    });

    it("should not reverse non-string values", () => {
        expect(reverseString(123)).toBe(123);
    });

    it("should return undefined if no input given", () => {
        expect(reverseString()).toBe(undefined);
    });
})

describe("calculator check", () => {
    it("should give warning if inputs are not number", () => {
        expect(calculator.add("3", 5)).toBe("Invalid input");
    });

    it("should add two numbers", () => {
        expect(calculator.add(3, 5)).toBe(8);
    })

    it("should substract two numbers", () => {
        expect(calculator.substract(3, 5)).toBe(-2);
    });

    it("should multiply two numbers", () => {
        expect(calculator.multiply(3, 5)).toBe(15);
    });

    it("should divide two numbers", () => {
        expect(calculator.divide(3, 5)).toBe(0.6);
    });

    it("should give warning if divider equals zero", () => {
        expect(calculator.divide(3, 0)).toBe("Zero division error");
    });
})

describe("Caesar Cipher check", () => {
    it("should give warning if inputs invalid", () => {
        expect(caesarCipher("hello", "5")).toBe("Invalid input")
    })

    it("should cipher text with shift number", () => {
        expect(caesarCipher("hello", 5)).toBe("mjqqt");
    });

    it("should cipher text with negative shift number", () => {
        expect(caesarCipher("hello", -5)).toBe("czggj");
    });

    it("should cipher text if index exceeds 26", () => {
        expect(caesarCipher("view", 7)).toBe("cpld");
    });

    it("should not cipher punctiation chars and numbers", () => {
        expect(caesarCipher("hello! every5", 5)).toBe("mjqqt! jajwd5");
    });
})

describe("analyzeArray check", () => {
    it("should calculate values", () => {
        expect(analyzeArray([1, 3, 6, 15, 22])).toEqual({
            average: 9.4,
            min: 1,
            max: 22,
            length: 5
        })
    })

    it("should calculate with negative values", () => {
        expect(analyzeArray([1, 0, -6, 15, -22])).toEqual({
            average: -2.4,
            min: -22,
            max: 15,
            length: 5,
        });
    });

    it("should calculate with repeating values", () => {
        expect(analyzeArray([-6, 0, -6, 15, 15])).toEqual({
            average: 3.6,
            min: -6,
            max: 15,
            length: 5,
        });
    });

    it("should calculate with empty array", () => {
        expect(analyzeArray([])).toEqual({
            average: undefined,
            min: undefined,
            max: undefined,
            length: undefined,
        });
    });
})