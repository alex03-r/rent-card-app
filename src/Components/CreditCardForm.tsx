
import { useState } from 'react';

import "../styles/style.css"



export function CreditCardForm() {


  const [input, setinput] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleCard(e) {

    if ( !isNaN(e.target.value)) {
      setinput(e.target.value)

    }

  }

  return (
    <div>
      <p className="text-center h2 " >Pay the rent!</p>
      <form onSubmit={handleSubmit} className="credit-card mt-0 shadow rounded border">
        <div className="form-header">
          <h4 className="text-dark">Credit card detail</h4>
        </div>

        <div className="form-body">

          <input type="text" className="card-number" onChange={handleCard} value={input} placeholder="Card Number" />


          <div className="mt-1">
            {/* date-field */}
            <div className="month">
              <select name="Month">
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
            <div className="year">
              <select name="Year">
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>


          <div className="card-verification mt-3">
            <div className="cvv-input">
              <input className="form-control" type="text" placeholder="CVV" />
            </div>
            <div className="cvv-details ">
              <p>3 or 4 digits usually found <br /> on the signature strip</p>
            </div>
          </div>


          <button type="submit" className="proceed-btn mt-5"><a href="#">Pay</a></button>

        </div>
      </form>

    </div>
  )
}