import react from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { removeCars } from '../store';
export default function CarList(props){
    const {cars,name} = useSelector(({form,cars:{data,searchTerm}})=>{
        const filteredCars =  data.filter((car)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return {
            cars:filteredCars,
            name:form.name,
        }

    });
    const dispatch = useDispatch();
    const handleCarDelete = (car)=>{
        dispatch(removeCars(car.id))
    }
    const renderedCars = cars.map((car)=>{
        // SELECT WHICH CAR SHOULD BE BOLD
        // state.form.name
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
        <div key={car.id} className={`panel ${bold && 'bold'}`}>
            <p>
                {car.name} - ${car.cost}
            </p>
            <button className='button is-danger'
            onClick={()=>handleCarDelete(car)}
            >
                Delete
            </button>
        </div>
        );
    });
    
    return (
        <div className='car-list'>
            {renderedCars}
            <hr />
        </div>
    )
}