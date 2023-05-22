import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import './Checkout.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './Base'




const Checkout = () => {
  const Nav = useNavigate()

const dataCollectionRef = collection(db, 'entries')

    const [names, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [goods, setGoods] = useState('')
    const [amount, setAmount] = useState('')


    
const handleSubmit = e => {
  e.preventDefault()
  if (names === '' || email === '' || phone ==='' || goods === '' || amount === '') return;

  const myData = {
      name: names,
      email: email,
      phone: phone,
      goods: goods,
      amount: amount
  }
  addDoc(dataCollectionRef, myData)
   .then(()=>{
      setName('');
      setAddress('');
      setPhone('')
      setEmail('')
      setGoods('')
      setAmount('')

   })
} 
    
  return (
    <div className='Main_Container'>
        <h1>Melasi Stores</h1>
        <h2 className='Transact_Btn' onClick={()=> Nav('Transactions')} >See Transaction History</h2>
        <form className='Content_Container' onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Name'
            value={names}
            onChange={e => setName(e.target.value)}
            required
             /> 
             <input type="text"
             placeholder='Address'
             value={address}
            onChange={e => setAddress(e.target.value)}
              />
               <input type="email"
            placeholder='email address'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
             />
              <input type="number"
            placeholder='Phone Number'
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
             />
              <input type="text"
            placeholder='Goods/Services'
            value={goods}
            onChange={e => setGoods(e.target.value)}
            required
             />
             <input type="number"
            placeholder='Amount'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
             />
             <button className='Submit_Btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Checkout