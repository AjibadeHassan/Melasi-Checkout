import React, {useState} from 'react';
import './Checkout.css';

const Checkout = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [goods, setGoods] = useState('')
    const [amount, setAmount] = useState('')
    
  return (
    <div className='Main_Container'>
        <h1>Melasi Stores</h1>
        <section className='Content_Container'>
            <input type="text"
            placeholder='Name'
            value={name}
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
             <button className='Submit_Btn' onClick={()=>{
                if(name && phone && email && amount && goods){
                    console.log(name, phone, email, amount, address, goods)
                }else {
                    
                }
             }}>Submit</button>
        </section>
    </div>
  )
}

export default Checkout