import { useSelector } from "react-redux";

function CarValue(){

    const cars = useSelector(state => {
        if(state.carList.term){
            const filteredCars = state.carList.cars.filter(car => {
                return car.name.toLowerCase().includes(state.carList.term.toLowerCase());
            });
            return filteredCars;
        }
        return state.carList.cars; 
    });

    const totalCost = cars.reduce((accum, car) => accum + car.cost, 0);
   
    return(
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    );
}

export default CarValue;