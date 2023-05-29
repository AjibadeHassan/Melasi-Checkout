import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './Base'

const Transactions = () => {
    const [trans, setTrans] = useState([])
    const myData = collection(db, 'entries')
    const getTransactions = function(){
        getDocs(myData)
        .then(response=>{
            // console.log(response.docs)
            const Data =response.docs.map((docs)=>({
                data: docs.data(),
                id: docs.id,
            }))
            setTrans(Data)
        }).catch((err)=> console.log(err.message))
    }
    window.addEventListener('load', getTransactions())
  
     
        // trans.map((data) =>(
        //     console.log(data.data.date)))

  return (
    <div className='Transactions'>
       {
         trans.map((data) =>(
            <section className='Entry_Item' key={data.id}>
              <h1>My History</h1>
                <div className='Entr_Card'>
                <p>{data.data.name}</p>
                <p>{data.data.phone}</p>
                <h3>{data.data.goods}</h3>
                <p>{data.data.amount}</p>
                <p>{(data.data.date)}</p>
                </div>
            </section>
         ))
       }
    </div>
  )
}

export default Transactions