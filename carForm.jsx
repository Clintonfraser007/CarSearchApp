import react from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { changeCost, changeName,addCars } from '../store'
export default function CarForm(props){
    const dispatch = useDispatch();
    const {name,cost} = useSelector((state)=>{
        return {
            name:state.form.name,
            cost:state.form.cost,   
        }
    });
    
  
    const handleNameChange = (event) =>{
        // pass the new value
        const newName = event.target.value;
        dispatch(changeName(newName));
        
    };
    const handleCostChange = (event)=>{
        // pass the new cost
        const newCost = parseInt(event.target.value) || 0; // to handle NAN case
        dispatch(changeCost(newCost))
    };

     const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addCars({name,cost}))

    };
    return (
        <div className='car-form panel'>
            <h4 className='subtitle is-3 '>
                Add car {name}
            </h4>
            <form onSubmit={handleSubmit}>
                <div className='field-group'>
                    <div className='field'>
                        <label className='label'>Name</label>
                        <input type="text" className='input is-expanded'
                        value={name}
                        onChange={handleNameChange} 
                        />
                    </div>
                    <div className='field'>
                        <label className='label'>Cost</label>
                        <input type="number" className='input is-expanded'
                        value={cost || ''}
                        onChange={handleCostChange} 
                        />
                    </div>

                </div>
                <div className='field'>
                    <button className='button is-link'>Submit</button>

                </div>
            </form>
            
        </div>
    )
}