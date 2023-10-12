import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GetAvailability } from './GetAvailability';
import { CreateJob } from './CreateJob';
import GetOrderById from './GetOrderById';
import UpdatePaymentInfo from './UpdatePaymentInfo';
import ShowData from './ShowData';

function App() {
  const [availabilityState, setAvailabilityState] = useState([])
  const [orderById, setOrderById] = useState([]);
  const[dataOrder,setDataOrder]=useState([]);

  
  const proyectarFactura=()=>{
    return (<h1>A ver</h1>)
  }

  
  return (
    <>

      <h1>App Instaleap</h1>
      <div className="card">
      
      {true &&<GetAvailability setAvailabilityState={setAvailabilityState}/>} 

      {console.log(availabilityState.data)}
      {!(availabilityState.length < 1) && <CreateJob availabilityState={availabilityState} setOrderById={setOrderById}/>}
      {/* <CreateJob  setCount={count,setCount}/> */}

      {!(orderById.length < 1) && <GetOrderById orderById={orderById}  setDataOrder={setDataOrder}/>}


       {!(dataOrder.length < 1) &&<ShowData dataOrder={dataOrder}/>}  
      

       {!(dataOrder.length < 1) &&<UpdatePaymentInfo orderById={orderById}  />} 

      

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
        By  Eduard Molano
        </p>
      </div>

    </>
  )
}

export default App
