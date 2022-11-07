import React, { Component } from 'react'
import cssContact from './Contact.module.css'
export default class Contact extends Component {
  render() {
    return <>
    <section className='py-5'>
        <div className='text-center'>
          <h1>CONTACT ME</h1>
        </div>
      <div className='w-50 m-auto'>
          <div className={`${cssContact.bottom}`}>
            <input type="text" className='form-control my-3 border-0' placeholder='Name' />
        </div>
          <div className={`${cssContact.bottom}`}>
            <input type="text" className='form-control my-3 border-0' placeholder='Email Address' />
        </div>
          <div className={`${cssContact.bottom}`}>
            <input type="text" className='form-control my-3 border-0' placeholder='Phone Number' />
        </div>
          <div className={`pb-5 ${cssContact.bottom}`}>
            <input type="text" className='form-control my-3 border-0' placeholder='Address' />
          </div>

          <button className='btn btn-success my-5'>Send</button>
      </div>
    </section>
    
    
    </>
  }
}
