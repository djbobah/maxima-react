import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/index";
import axios from "axios";

interface IWeatherData {
  name: string;
  // Другие поля, которые возвращает API
}
interface ITownState {
  towns: string[];
  townsWeather: IWeatherData[];
  error: string;
}
const API_KEY = "306e09cb7cf278985a4d29a8e587a676";

export const getTownWeather = createAsyncThunk(
  "fetch/weather",
  async function (town: string) {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${API_KEY}`,
      });
      return { ...data, nameRus: town };
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState: ITownState = {
  towns: [
    "Москва",
    "Санкт-Петербург",
    "Волгоград",
    "Саратов",
    "Ростов-на-Дону",
  ],
  townsWeather: [],
  error: "",
  // weatherTowns: [],
};
const TownsSlice = createSlice({
  name: "towns",
  initialState,
  reducers: {
    deleteTown(state, action) {
      // console.log(action.payload);
      state.townsWeather = state.townsWeather.filter(
        (town) => town.name !== action.payload.name
      );
      state.towns = state.towns.filter(
        (town) => town !== action.payload.nameRus
      );
    },
    setError(state, action) {
      state.error = action.payload;
    },

    addTown(state, action: PayloadAction<string>) {
      // state.towns.map((item) => console.log(item));

      if (action.payload !== "") state.towns.push(action.payload);
      if (Number(state.towns.indexOf(action.payload)) !== -1) {
        console.log("not exist");
      }
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getTownWeather.pending, (state, action) => {
    //   // console.log("get weather pending", action.payload);
    // });
    builder.addCase(getTownWeather.fulfilled, (state, action) => {
      state.townsWeather = [...state.townsWeather, action.payload];
    });
  },
});

export const { addTown, deleteTown, setError } = TownsSlice.actions;

export const selectCount = (state: RootState) => state.towns;

export default TownsSlice.reducer;
