export const randNumber = function (max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRGB = () => {
  return `rgb(${randNumber(256)},${randNumber(256)},${randNumber(256)})`;
};

class Counter {
  constructor() {
    this.val = 0;
  }
  change(newVal) {
    this.val = newVal;
  }
  inc() {
    this.val += 1;
  }
  dec() {
    this.val -= 1;
  }
  // getVal()
}

export default Counter;
