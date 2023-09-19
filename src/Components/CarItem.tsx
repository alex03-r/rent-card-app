

export interface CardProps {

    id: number
    name: string;
    price: number;
    luggage: number;
    passengers: number;
    doors: number;
    img: string;

}

import { useNavigate } from "react-router-dom";
import { formarAmout } from "../utilities/format";

export function CarItem(props: CardProps) {


   const navigate =  useNavigate()

   function navigateToRentPage(id:number){


    navigate(`/rent/${id}`)

   }
  

    return (
     
        <div className="col-md-6 col-lg-4 mb-4">

            <div className="listing d-block  align-items-stretch">
                <div className="listing-img h-100 mr-4">
                    <img src={props.img} alt="Image" className="img-fluid" />
                </div>
                <div className="listing-contents h-100">
                    <h3>{props.name}</h3>
                    <div className="rent-price">
                        <strong>${ formarAmout(props.price)}</strong><span className="mx-1">/</span>day
                    </div>
                    <div className="d-block d-md-flex mb-3 gap-4 border-bottom pb-3">
                        <div className="listing-feature pr-4">
                            <span className="caption">Luggage:</span>
                            <span className="number">{props.luggage}</span>
                        </div>
                        <div className="listing-feature pr-4">
                            <span className="caption">Doors:</span>
                            <span className="number">{props.doors}</span>
                        </div>
                        <div className="listing-feature pr-4">
                            <span className="caption">Passenger:</span>
                            <span className="number">{props.passengers}</span>
                        </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos at eum, voluptatem quibusdam.</p>
                        <p><button className="btn btn-primary btn-sm" onClick={ () => navigateToRentPage(props.id) } >Rent Now</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}