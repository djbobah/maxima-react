import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/index";
import WeatherService from "src/services/weather.service";
// import axios from "axios";
interface ITownState {
  data: { towns: string[]; weather: Object[] };
  // weatherTowns: Object[];
}

const initialState: ITownState = {
  data: {
    towns: [
      "Москва",
      "Санкт-Петербург",
      "Волгоград",
      "Саратов",
      "Ростов-на-Дону",
    ],
    weather: [],
  },
  // weatherTowns: [],
};
const TownsSlice = createSlice({
  name: "towns",
  initialState,
  reducers: {
    // deleteWord(state, action) {
    //   state.data.towns = state.data.towns.filter(
    //     (town: string) => town !== action.payload
    //   );
    // },
    // editWord(state, action) {
    //   const ind = state.towns.findIndex((el) => el === action.payload.word);
    //   state.towns[ind] = action.payload.newWord;
    // },

    getTownWeather(action: PayloadAction<Object>) {
      try {
        const data = WeatherService.getWeather("Морозовск");
      } catch (error) {
        console.log(error);
      }

      // const API_KEY = "306e09cb7cf278985a4d29a8e587a676";
      // try {
      //   axios({
      //     method: "get",
      //     url: `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${API_KEY}`,
      //   });
      //   // return data;
      // } catch (error) {
      //   console.log(error);
      // }
    },
    addTown(state, action: PayloadAction<string>) {
      state.data.towns.push(action.payload);
    },
  },
});

export const { deleteWord, addTown, getTownWeather } = TownsSlice.actions;

export const selectCount = (state: RootState) => state.towns;
export default TownsSlice.reducer;
