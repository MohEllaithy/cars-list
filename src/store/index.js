import { configureStore } from "@reduxjs/toolkit";
import { carCreationReducer, changeName, changeCost } from "./slices/carCreationSlice";
import { carListReducer, changeTerm, addCar, deleteCar } from "./slices/carListSlice";

const store = configureStore({
    reducer: {
        car: carCreationReducer,
        carList: carListReducer
    }
});

export {store,changeName, changeCost, changeTerm, addCar, deleteCar};