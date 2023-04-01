import react from 'react';
import CarForm from './components/carForm';
import CarValue from './components/carValue';
import CarSearch from './components/carSearch';
import CarList from './components/carList';

export default function App(props){
  return(
    <div className='container is-fluid'>
      <CarForm/>
      <CarSearch/>
      <CarList/>
      <CarValue/>

    </div>
  )
}
