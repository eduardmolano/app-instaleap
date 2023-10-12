import React from 'react'

export default function ShowData(dataOrder) {
  return (
   <>
   <p className='factura' >
    <h3>Factura</h3>
    Referencia {dataOrder.dataOrder.data.job_number} 
   <br/> Fecha {dataOrder.dataOrder.data.created_at}
   <br/> Nombre {dataOrder.dataOrder.data.client_id}
   <br/> Email {dataOrder.dataOrder.data.recipient.email}
   <br/> Celular {dataOrder.dataOrder.data.recipient.phone_number}
   <br/> Valor {dataOrder.dataOrder.data.payment_info.payment.value}
   <br/> Moneda {dataOrder.dataOrder.data.payment_info.currency_code}
   <br/> Metodo de pago {dataOrder.dataOrder.data.collect_with.method}
   <br/> Destino {dataOrder.dataOrder.data.destination.name}
   <br/> Direccion {dataOrder.dataOrder.data.destination.address}
   <br/> Tienda {dataOrder.dataOrder.data.store.name}
   {/* <br/> Nombre {dataOrder.dataOrder.data.client_id}
   <br/> Nombre {dataOrder.dataOrder.data.client_id}
   <br/> Nombre {dataOrder.dataOrder.data.client_id}
   <br/> Nombre {dataOrder.dataOrder.data.client_id}
   <br/> Nombre {dataOrder.dataOrder.data.client_id}
   <br/> Nombre {dataOrder.dataOrder.data.client_id} */}
   
   
   </p>

   </>
  )
}
