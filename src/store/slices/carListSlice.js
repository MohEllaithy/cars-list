import { createSlice, nanoid } from "@reduxjs/toolkit";

const carListSlice = createSlice({
    name: "carList",
    initialState: {
        term: '',
        cars: []
    },
    reducers: {
        changeTerm(state, action){
            state.term = action.payload;
        },
        addCar(state, action){
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        deleteCar(state, action){
            const updatedList = state.cars.filter(car => car.id !== action.payload);
            state.cars = updatedList;
        }
    }
});

export const {changeTerm, addCar, deleteCar} = carListSlice.actions;
export const carListReducer = carListSlice.reducer;