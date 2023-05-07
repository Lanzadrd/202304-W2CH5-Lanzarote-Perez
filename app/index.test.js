import based from "./index.js";

describe("Given a length function", () => {
  describe("When it receives the array ['hola', 'adios', 'avion', 'casa', 'coche']", () => {
    test("Then it should return 5", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const result = 5;

      const expectedResult = based.lengthProperty(randomWords);

      expect(expectedResult).toBe(result);
    });
  });

  describe("When it receives the array ['hola']", () => {
    test("Then it should return 1", () => {
      const randomWords = ["hola"];
      const result = 1;

      const expectedResult = based.lengthProperty(randomWords);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a push function", () => {
  describe("When it receives 'barco' and `airplane`", () => {
    test("Then it should return 7", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const result = 7;

      const expectedResult = based.pushProperty(
        randomWords,
        "barco",
        "airplane"
      );

      expect(expectedResult).toBe(result);
    });
  });

  describe("When it receives 'casa'", () => {
    test("Then it should return 6", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const result = 6;

      const expectedResult = based.pushProperty(randomWords, "casa");

      expect(expectedResult).toBe(result);
    });
  });

  describe("When it receives 'casa'", () => {
    test("Then it should return 1", () => {
      const randomWords = [];
      const result = 1;

      const expectedResult = based.pushProperty(randomWords, "casa");

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a pop function", () => {
  describe("When it receives the randomWords array", () => {
    test("Then it should return 6", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const result = "coche";

      const expectedResult = based.popProperty(randomWords);

      expect(expectedResult).toBe(result);
    });
  });

  describe("When it receives a 2-word array", () => {
    test("Then it should return 1", () => {
      const randomWords = ["hola", "adios"];
      const result = "adios";

      const expectedResult = based.popProperty(randomWords);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a some function", () => {
  describe("When it receives randomWords array, and the parameter of 'barco'", () => {
    test("Then it should return true", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const thisParameter = "casa";
      const result = true;

      const expectedResult = based.someProperty(randomWords, thisParameter);

      expect(expectedResult).toBe(result);
    });
  });

  describe("When it receives randomWords array, and the parameter of length >= 3", () => {
    test("Then it should return true", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const parameter = (currentValue) => currentValue.length() >= 3;
      const result = true;

      const expectedResult = based.someProperty(randomWords, parameter);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a find function", () => {
  describe("When it receives randomWords array, and the parameter of 'casa'", () => {
    test("Then it should return the word that matched the parameter", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const parameter = "casa";
      const result = "casa";

      const expectedResult = based.findProperty(randomWords, parameter);

      expect(expectedResult).toBe(result);
    });
  });

  describe("When it receives randomWords array, and the parameter of 'coche'", () => {
    test("Then it should return the word that matched the parameter", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const parameter = "coche";
      const result = "coche";

      const expectedResult = based.findProperty(randomWords, parameter);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given a shift function", () => {
  describe("When it receives randomWords array", () => {
    test("Then it should return the word in the first position and change the array's length", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const result = "hola";

      const expectedResult = based.shiftProperty(randomWords);

      expect(expectedResult).toBe(result);
    });
  });

  describe("When it receives an empty array", () => {
    test("Then it should return undefined", () => {
      const randomWords = [];
      const result = undefined;

      const expectedResult = based.shiftProperty(randomWords);

      expect(expectedResult).toBe(result);
    });
  });

  describe("When it receives a 1-word array", () => {
    test("Then it should return `alone`", () => {
      const randomWords = ["alone"];
      const result = "alone";

      const expectedResult = based.shiftProperty(randomWords);

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given an unshift function", () => {
  describe(`When it receives randomWords array, and "gato" and "waterski" as parameters`, () => {
    test("Then it should return the new words at the start of the array", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const result = 7;

      const expectedResult = based.unshiftProperty(
        randomWords,
        "gato",
        "waterski"
      );

      expect(expectedResult).toBe(result);
    });
  });

  describe(`When it receives a 1-word array, and "hello" as parameters`, () => {
    test("Then it should return the new words at the start of the array", () => {
      const randomWords = ["hola"];
      const result = 2;

      const expectedResult = based.unshiftProperty(randomWords, "hello");

      expect(expectedResult).toBe(result);
    });
  });
});

describe("Given an every function", () => {
  describe(`When it receives randomWords array, and a parameter of length > 3`, () => {
    test("Then it should return true", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const comparator = (currentValue) => currentValue.length() >= 3;
      const result = true;

      const expectedResult = based.everyProperty(randomWords, comparator);

      expect(expectedResult).toBe(result);
    });
  });

  describe(`When it receives an empty array, and a parameter of length > 3`, () => {
    test("Then it should return true", () => {
      const randomWords = [];
      const comparator = (currentValue) => currentValue.length() >= 3;
      const result = true;

      const expectedResult = based.everyProperty(randomWords, comparator);

      expect(expectedResult).toBe(result);
    });
  });

  describe(`When it receives randomWords array, and a parameter of length < 2`, () => {
    test("Then it should return false", () => {
      const randomWords = ["hola", "adios", "avion", "casa", "coche"];
      const comparator = currentValue.length() <= 2;
      const result = false;

      const expectedResult = based.everyProperty(randomWords, comparator);

      expect(expectedResult).toBe(result);
    });
  });
});
