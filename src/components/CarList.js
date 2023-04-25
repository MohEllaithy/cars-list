import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../store";

function CarList(){
    const dispatch = useDispatch();


    const cars = useSelector(state => {
        if(state.car.name && !state.carList.term){
            const filteredCars = state.carList.cars.map(car => {
                if (car.name.toLowerCase().includes(state.car.name.toLowerCase())) return {...car, bold:true};
                return car;
            });
            return filteredCars;
        }

        if(state.carList.term){
            const filteredCars = state.carList.cars.filter(car => {
                return car.name.toLowerCase().includes(state.carList.term.toLowerCase());
            });
            return filteredCars;
        }

        return state.carList.cars; 
    });

    const handleCarDelete = car => {
        dispatch(deleteCar(car.id));
    };

    const renderedList = cars.map(car => <div key={car.id} className={`panel ${car.bold && 'bold'}`}>
        <p>{car.name} - ${car.cost}</p>
        <button className="button is-danger" onClick={() => handleCarDelete(car)}>Delete</button>
    </div>
    );

    return(
        <div className="car-list">
            {renderedList}
            <hr />
        </div>
    );
}

export default CarList;