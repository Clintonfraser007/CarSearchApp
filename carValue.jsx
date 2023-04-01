import react from 'react';
import {useSelector} from 'react-redux';


export default function CarValue(props){
    const totalCost = useSelector(({cars:{data,searchTerm}})=>{
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
        let cost = 0;
       return filteredCars.reduce((acc,car)=>{
        return acc + car.cost;  
       },0)
    })
    return (
        <div className='car-value'>
            Total Cost: ${totalCost}
        </div>
    )
}