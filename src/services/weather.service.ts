import axios from "axios";
const API_KEY = "306e09cb7cf278985a4d29a8e587a676";

const WeatherService = {
  getWeather: async (town: string) => {
    const { data } = await axios({
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${API_KEY}`,
    });
    return data;
  },
};
export default WeatherService;
