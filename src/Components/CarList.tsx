import { CarItem } from "./CarItem";

import { CardProps } from "./CarItem";
import { useState } from "react";
import { NoDetailsFound  } from "./NoDetailsFound";

export function CarList({ cars, isSearchEnabled }: { cars: CardProps[], isSearchEnabled: boolean }) {


    const [inputText, setInputText] = useState("")
    let filteredCars = cars.filter(car => car.name.toLowerCase().includes(inputText.toLocaleLowerCase()))

    return (



        <>

            <div className="site-section bg-light">
                <div className="container">
                    <div className="d-flex justify-content-between ">
                        <div className="col-lg-7">
                            <h2 className="section-heading"><strong>Car Listings</strong></h2>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        {isSearchEnabled &&
                            <div className="mt-2">
                                <label className="mb-2 fw-bold" > Find the car you deserve: </label>
                                <input value={inputText} onChange={(e) => setInputText(e.target.value)} className=" form-control" placeholder="Search" />
                            </div>}
                    </div>
                    {filteredCars.length == 0 ? <NoDetailsFound title="Sorry no cars found" /> :
                        <div className="row">
                            {filteredCars.map(card => (<CarItem key={card.id} {...card} />))}
                        </div>
                    }
                </div>
            </div>

        </>

    )
}