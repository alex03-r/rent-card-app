import { useParams } from "react-router-dom"
import Cars from "../data/cars.json"
import { RentForm } from "../Components/RentForm"
import { useState } from "react"
import { Footer } from "../Components/Footer"

import Swal from 'sweetalert2'

export function RentScreen() {


    const [isReadyToPay, setIsReadyToPay] = useState(false)

    const { id } = useParams()

    let carSelected = Cars.find(car => car.id == parseInt(id!))


    return (
        <div>
      
            <RentForm car={carSelected!} isReadyToPay={isReadyToPay} setIsReadyToPay={setIsReadyToPay} />
            <Footer />
        </div>
    )
}