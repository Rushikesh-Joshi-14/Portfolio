import React from 'react'
import ap from '../../assets/ap.png'
import starbucks from '../../assets/starbucks.png'
import spotify from '../../assets/spotify.png'
import tcs from '../../assets/tcs.png'
import './clients.css'

const Clients = () => {
  return (
   <section id='clients' >
          <h2 className='clientTitle'>My Clients</h2>
        <p className='clientDesc'>dummy text dummy dummy text dummy dummy text dummy dummy text dummy dummy text dummy dummy text dummy  text dummy text dummy text dummy text dummy text dummy text dummy text dummy text </p>

        <div id='clientImg' className='clientImages' data-aos="zoom-in-up" data-aos-duration="1500">
            <img className='clientImg' src={ap}/>
            <img className='clientImg' src={starbucks}/>
            <img className='clientImg' src={spotify}/>
            <img className='clientImg' src={tcs}/>
           
        </div>

   </section>
  )
}

export default Clients
