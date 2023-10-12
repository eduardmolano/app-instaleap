import axios from 'axios'
import { useState } from 'react'

export default function GetOrderById({orderById, setDataOrder}) {
 
    

    let data = '';

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.xandar.instaleap.io/jobs/${orderById}`,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'yoJYongi4V4m0S4LClubdyiu5nq6VIpxazcFaghi'
        },
        data: data
    };


    const f_getOrderById = () => {
        axios.request(config)
            .then((response) => {
                setDataOrder(response)
                console.log(JSON.stringify(response.data));
                
            })
            .catch((error) => {
                console.log(error);
            });
    }




    return (
        <>
        <div>
            <button onClick={f_getOrderById}>Consulta tu orden</button>

        </div>

        </>
    )
}
