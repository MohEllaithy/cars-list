import { useDispatch, useSelector } from "react-redux";
import { changeTerm } from "../store";

function CarSearch(){
    const dispatch = useDispatch();

    const handleChange = event => dispatch(changeTerm(event.target.value));
    
    const searchTerm = useSelector(state => state.carList.term);

    return(
        <div className="list-header" style={{marginTop:30}}>
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
                <input className="input" value={searchTerm} onChange={handleChange} />
            </div>
        </div>
    );
}

export default CarSearch;