import { useState } from 'react';
import axios from 'axios'

export const CreateJob = ({ availabilityState, setOrderById }) => {

    const [slotId, setSlotId] = useState('');

    const [job, setJob] = useState([]);

    const[reference, setReference]=useState(Math.random().toString(36).replace(/[^a-z]+/g, ''))

  
    const createResquest=(id)=>{
           let data = JSON.stringify({
            "slot_id": id,
            "client_reference": reference,
            "recipient": {
                "name": "Test",
                "email": "test@test.com",
                "phone_number": "3112112121",
                "identification": {
                    "number": "123456789",
                    "type": "Cedula"
                }
            },
            "payment_info": {
                "currency_code": "COP",
                "prices": {
                    "order_value": 50000
                },
                "payment": {
                    "method": "CASH",
                    "value": 26000
                }
            }
        });
    
    return  {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.xandar.instaleap.io/jobs',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'yoJYongi4V4m0S4LClubdyiu5nq6VIpxazcFaghi'
            },
            data: data
        };
    }

    const f_createJob = (event, id) => {
        setSlotId(id);
       const config= createResquest(id)
        


        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setJob(response);
                setOrderById(response.data.job_id)
                setReference(Math.random().toString(36).replace(/[^a-z]+/g, ''))
                { confirm( `Hola! tu pedido  fue asignado correctamente con el id ${response.data.job_id} 
                y referencia ${reference}
                ${response.data.message}`    ) }
                


            })
            .catch((error) => {
                console.log(error.response.data.message);
                alert('Vuelva a intentar por favor '+error.response.data.message)
            });

    }

    return (
        <>
            {/* {alert(job.data[0])} */}
            {/* {console.log('revision')}
            {console.log(job)} */}
            {/* {confirm('hola '+job.data.message)} */}
            {/* 
            <p>{console.log("create Job")}</p>
            {console.log(slotId)} */}

            <h3>Selecciona tu disponibilidad</h3>
            {availabilityState.data.map(a => <div>
                <button id={a.id} onClick={((event) => f_createJob(event, a.id))} >  {a.from}<br></br>{a.to}</button></div>
                
            )
           
            }



        </>
    )
}
