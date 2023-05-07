const lengthProperty = (array) => {
  let i = 0;

  for (i in array) {
    i++;
  }

  return i;
};

const pushProperty = (array, ...newElement) => {
  let newPushedArray = [...newElement];
  for (let i = 0; i < lengthProperty(newPushedArray); i++) {
    array[lengthProperty(array)] = newPushedArray[i];
  }

  return lengthProperty(array);
};

const popProperty = (array) => {
  const poppedElement = array[lengthProperty(array) - 1];
  array = array.length -= 1;

  return poppedElement;
};

const someProperty = (array, parameter) => {
  for (let i = 0; i < lengthProperty(array); i++) {
    if (array[i] === parameter) {
      return true;
    }
  }

  return false;
};

const findProperty = (array, parameter) => {
  const newLength = lengthProperty(array);

  for (let i = 0; i < newLength; i++) {
    if (array[i] === parameter) {
      return array[i];
    }
  }

  return undefined;
};

const shiftProperty = (array) => {
  if (lengthProperty(array) === 0) {
    return undefined;
  }

  let firstIndex = array[0];
  for (let i = 0; i < lengthProperty(array); i++) {
    array[i - 1] = array[i];
  }

  popProperty(array);
  return firstIndex;
};

const unshiftProperty = (array, ...element) => {
  if (lengthProperty(array) === 0) {
    return undefined;
  }
  array = [...element, ...array];

  return lengthProperty(array);
};

const everyProperty = (array, comparator) => {
  if (lengthProperty(array) === 0) {
    return true;
  }
  for (let i = 0; i < lengthProperty(array); i++) {
    if (array[i] !== comparator) {
      return true;
    }
  }
  return true;
};

export default {
  lengthProperty,
  pushProperty,
  popProperty,
  someProperty,
  findProperty,
  shiftProperty,
  unshiftProperty,
  everyProperty,
};
