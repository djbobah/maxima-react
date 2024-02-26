export const randNumber = function (max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRGB = () => {
  return `rgb(${randNumber(256)},${randNumber(256)},${randNumber(256)})`;
};

export const getArray = (n) => {
  let arr: unknown[] = [];
  while (n--) {
    arr.push(null);
  }
  return arr;
};

// type TGetWeather={
//   town:string
// }
// type TgetWeather = (a: string) => void;
export async function getWeather(town: string) {
  const API_KEY = "306e09cb7cf278985a4d29a8e587a676";
  let weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${API_KEY}`
  ).then((response) => response.json());
  // .then((data) => {
  //   data.send(200);
  //   // console.log(data);
  // });
  console.log(weather);
  return weather;
}

class Counter {
  val: number;
  constructor() {
    this.val = 0;
  }
  change(newVal: number) {
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
