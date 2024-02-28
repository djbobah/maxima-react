import axios from "axios";
import { useState } from "react";

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

// const ProductService = {
//   getProducts: async () => {
//     const { data } = await axios({
//       method: "get",
//       url: "http://localhost:8081/products",
//     });
//     return data;
//   },
// };

// export const getWeather2={

// }

export async function getWeather(town: string) {
  const API_KEY = "306e09cb7cf278985a4d29a8e587a676";
  const { data } = await axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${API_KEY}`,
  });
  console.log(data);
  return data;
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
