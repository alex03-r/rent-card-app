
import "../styles/style.css"

export function HowWork(){


    return(
        <div className="site-section">
        <div className="container">
          <h2 className="section-heading"><strong>How it works?</strong></h2>
          <p className="mb-5">Easy steps to get you started</p>    

          <div className="row mb-5">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>1</span>
                <div className="step-inner mx-3">
                  {/* <span className="number text-primary">01.</span> */}
                  <h3>Select a car</h3>
                  <p>Check out our cards and select the one you le the most!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>2</span>
                <div className="step-inner mx-3">
                  {/* <span className="number text-primary">02.</span> */}
                  <h3>Fill up form</h3>
                  <p>Share all the details so that we can have your data for further situations!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>3</span>
                <div className="step-inner mx-3">
                  {/* <span className="number text-primary">03.</span> */}
                  <h3>Payment</h3>
                  <p>Pay the amount in other to have your card Righ Away!</p>
                </div>
              </div>
            </div>
          </div>      
        </div>
      </div>
      
    )
}