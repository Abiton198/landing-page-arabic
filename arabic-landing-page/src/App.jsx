import { useState } from 'react'
import './App.css'

function App() {
const [formData, setFormData] = useState({
    name:'',
    email:'',
    isChecked: true
}) 
const [submitText, setSubmitText] = useState('سجل')

function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData( prevFormData =>{
        return {
            ...prevFormData, 
            [name]:type === 'checkbox'? checked : value
        }
    } )
}

function handleSubmit(event){
    event.preventDefault()
   setSubmitText('جزاك الله خيرا')} 
   
  return (
    <div className="App">
      <div className="container">

              <div className="airline">
                  <p className="image-text">هيا بنا</p>
              </div>

              <div className="main">
                      <header className="head">
                              <h1 className="title"> طائرة الخطوط سعودية</h1>
                              <p className="payline">مرحبا بكم يا عزيزنا وعزيزتنا</p>

                      </header>

                      <form onSubmit={handleSubmit}>

                          <input className="name" 
                          type="text" 
                          name='name'
                          placeholder=" اسم" 
                          onChange={handleChange} 
                          value={formData.name}/>

                          <input className="email" 
                          type="email" 
                          name='email'
                          placeholder="بريد الكتروني" 
                          onChange={handleChange} 
                          value={formData.email}/>
                        
                          <div className="check">
                              <input type="checkbox"
                              onChange={handleChange}
                              checked={formData.isChecked}
                              id='isChecked'
                              name='isChecked'/>
                          <label htmlFor='isChecked' className="newsletter">رسالة اخبارة</label>

                              {/* <p className="newsletter">رسالة اخبارة</p> */}
                          </div>
                              <button className="submit">{submitText}</button>
                      </form>

              </div>
              </div> 
          </div>
  )
}

export default App
