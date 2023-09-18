
import { CarList } from "../Components/CarList"
import Cars from  "../data/cars.json"
import "../styles/style.css"
import RentCardImg from  "../assets/rentCard.png"
import { Footer } from "../Components/Footer"

export function ListingScreen() {


    return (
        <div>

            <div className="hero inner-page" style={{ backgroundImage: `url(${RentCardImg})`, backgroundSize:"cover", backgroundPosition:"bottom   " }} >

            </div>
            <div>
                <CarList cars={Cars} isSearchEnabled={true} />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}