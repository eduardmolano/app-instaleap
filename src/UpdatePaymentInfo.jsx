import React from 'react'
import axios from 'axios';
import { useState } from 'react'

export default function UpdatePaymentInfo({orderById}) {

    const [paymentUpdates, setPaymentUpdates] = useState([]);

    const [searchTerm, setSearchTerm] = useState();
    let data = JSON.stringify({
        "prices": {
            "subtotal": 0,
            "shipping_fee": 0,
            "discounts": 0,
            "taxes": 0,
            "order_value": 0,
            "attributes": [
                {
                    "type": "ORDER_VALUE",
                    "name": "string",
                    "value": 0
                }
            ]
        },
        "payment": {
            "id": "string",
            "payment_status": "SUCCEEDED",
            "method": "CASH",
            "reference": "string",
            "value": searchTerm*1,
            "payment_status_details": "string",
            "method_details": "string",
            "blocking_policy": "CHECKOUT"
        },
        "invoice": {
            "reference": "string",
            "attachments": [
                "string"
            ]
        }
    });

    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url:`https://api.xandar.instaleap.io/jobs/${orderById}/payment_info` ,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'yoJYongi4V4m0S4LClubdyiu5nq6VIpxazcFaghi'
        },
        data: data
    };



    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const f_updatePaymentInfo = (event) => {

        event.preventDefault();
        // handle search logic here
        console.log(`Searching for ${searchTerm}...`);

        axios.request(config)
            .then((response) => {
                
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });


    }


    return (


        <div>


            <form onSubmit={f_updatePaymentInfo}>
                <input placeholder="Monto" type="number" value={searchTerm} onChange={handleChange} />
                <button type="submit">actualizar valor</button>
            </form>
        </div>
    )
}
