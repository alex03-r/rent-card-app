

import React, { useState } from "react"
import Card from "../assets/hero_1_a.jpg"
import "../styles/style.css"
import { CardProps } from "./CarItem"
import { CreditCardForm } from "./CreditCardForm"
import { formarAmout } from "../utilities/format"

export function RentForm({ car, isReadyToPay, setIsReadyToPay }: { car: CardProps, isReadyToPay: boolean, setIsReadyToPay: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [inputs, setInputs] = useState({
        name: "",
        lastname: "",
        email: "",
        address: ""

    })

    const { name, lastname, email, address } = inputs;

    function handleInputsChange(e) {



        setInputs({ ...inputs, [e.target.name]: e.target.value })


    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!name || !lastname || !email || !address) {

            return


        }

        setIsReadyToPay(true)


    }

    return (

        <>
            {
                isReadyToPay ? <CreditCardForm /> :
                    <div className="site-section bg-light" id="contact-section">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-7 text-center mb-5">
                                    <h2>{car.name}</h2>
                                    <img className="img-rent" src={car.img} />
                                    <p><strong>Price:</strong> ${formarAmout(car.price)}</p>
                                    <p><strong>Passengers:</strong>#{car.passengers}</p>

                                </div>
                            </div>


                            <div className="row justify-content-center">

                                <div className="col-lg-7 mb-5 bg-light-subtle  border rounded  shadow" >
                                    <form onSubmit={handleSubmit} className="py-3" >
                                        <p className="text-center h2 mb-4" >Fill up the details</p>
                                        <div className="form-group row mb-3">

                                            <div className="col-md-12 mb-3">
                                                <input name="name" value={name} onChange={handleInputsChange} type="text" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="col-md-12">
                                                <input name="lastname" value={lastname} onChange={handleInputsChange} type="text" className="form-control" placeholder="Lastname" />
                                            </div>
                                        </div>

                                        <div className="form-group row  mb-3">
                                            <div className="col-md-12">
                                                <input name="email" value={email} onChange={handleInputsChange} type="text" className="form-control" placeholder="Email address" />
                                            </div>
                                        </div>
                                        <div className="form-group row  mb-3">
                                            <div className="col-md-12">
                                                <input name="address" value={address} onChange={handleInputsChange} type="text" className="form-control" placeholder="Adreess" />
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <div className="col-md-6 mr-auto">
                                                <button type="submit" className="btn btn-block btn-primary text-white " >Proceed</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
            }
        </>

    )
}

