import './App.css'

function App() {
 

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

                      <form>

                          <input className="name" type="name" placeholder=" اسم" required></input>
                          <input className="email" type="email" placeholder="بريد الكتروني" required></input>
                        
                          <div className="check">
                              <input type="checkbox"></input>
                              <p className="newsletter">رسالة اخبارة</p>
                          </div>
                              <button className="submit">سجل</button>
                          <label></label>
                      </form>

              </div>
              </div> 
          </div>
  )
}

export default App
