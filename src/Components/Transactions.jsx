import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './Base'

const Transactions = () => {
    const [trans, setTrans] = useState('')
    const myData = collection(db, 'entries')
    const getTransactions = function(){
        getDocs(myData)
        .then(response=>{
            console.log(response.docs)
            const Data =response.docs.map((docs)=>({
                data: docs.data(),
                id: docs.id,
            }))
            setTrans(Data)
        }).catch((err)=> console.log(err.message))
    }
    getTransactions()

  return (
    <div className='Transactions'>
        {
        trans.map((data) =>(
            console.log(data)))
        }
    </div>
  )
}

export default Transactions