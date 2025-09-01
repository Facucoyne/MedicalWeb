
import React from 'react'
import "./Contact.css"
export const Contact = () => {
  return (
    <>
    <h2 className='TextoContact'>Contáctanos</h2>
        <section className='contact'>
            
            <form className='Form1' >
                
                <div className='input-box'>
                <label >Fullname</label>
                <input type="text" className='field' placeholder='enter your name' required/>
                </div>

                 <div className='input-box'>
                <label >email</label>
                <input type="Email" className='field' placeholder='enter your email' required/>
                </div>

                 <div className='input-box'>
                <label >your mesagge</label>
                    <textarea name="" id="" className='field mess' placeholder='enter you message' required></textarea>
                </div>

                <button type='submit'>send message</button>
            </form>

        </section>
        </>
  )
}
