import axios from 'axios'
import { useState } from 'react'

export const GetAvailability = ({setAvailabilityState}) => {

    // const [availabilities, setAvailabilities] = useState([]);
    const start = new Date();
    const end = new Date();
    end.setHours((end.getHours()+48))

    let data = JSON.stringify({
        "currency_code": "UGX",
        "start": start.toISOString(),
        "end":   end.toISOString(),
        "slot_size": 60,
        "minimum_slot_size": 15,
        "operational_models_priority": [
            "FULL_SERVICE"
        ],
        "fallback": true,
        "store_reference": "101_FS",
        "origin": {
            "name": "101_FS",
            "address": "kr 91",
            "address_two": "69 71 sur",
            "description": "Tienda_description",
            "country": "Colombia",
            "city": "Bogota",
            "state": "Bogota",
            "zip_code": "110721",
            "latitude": 4.6279618418372115,
            "longitude": -74.19779998706402
        },
        "destination": {
            "name": "Casa_name",
            "address": "Cl. 138",
            "address_two": "11B-50",
            "description": "Casa_description",
            "country": "Colombia",
            "city": "Bogota",
            "state": "Bogota",
            "zip_code": "110121",
            "latitude": 4.71883590698393,
            "longitude": -74.03753051083177
        },
        "job_items": [
            {
                "id": "COD1",
                "name": "zapatos1",
                "photo_url": "https://mariohernandez.vtexassets.com/arquivos/ids/213954/zapatos-garcia-negro-premium_1.jpg?v=637920274644600000",
                "unit": "1",
                "sub_unit": "1",
                "quantity": 1,
                "sub_quantity": 1,
                "quantity_found_limits": {
                    "max": 1,
                    "min": 1
                },
                "barcodes": [
                    "000000000000",
                    "000000000000"
                ],
                "weight": 1,
                "volume": 1,
                "price": 20000,
                "comment": "comment",
                "picking_time_multiplier": 1,
                "replacement": {
                    "replacement_mode": "SUGGESTED",
                    "suggested_replacements": [
                        "1234",
                        "1963"
                    ]
                },
                "available_lots": [
                    "12345",
                    "98760",
                    "23571"
                ],
                "kit_info": {
                    "id": "string",
                    "number": 1,
                    "price": 20000
                },
                "attributes": {
                    "category": "calzado",
                    "plu": "CAL01",
                    "ean": "CAL01",
                    "location": "ZANA_A",
                    "picking_index": "1"
                }
            }
        ]
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.xandar.instaleap.io/jobs/availability/v2',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'yoJYongi4V4m0S4LClubdyiu5nq6VIpxazcFaghi'
        },
        data: data
    };

    //Funcion de disponiblidd
    const f_getAvailability = () => {


        axios.request(config).then((response) => {

            // setAvailabilities(response);
            setAvailabilityState(response);
9
        }).catch((error) => {

            console.log(error.response.data.message);
            alert(error.response.data.message)
        });
    }


    return (
        <>
            <div>
                <button onClick={f_getAvailability}>
                    Consultar disponiblidad
                </button>
            </div>

   
            

        </>
    )

}