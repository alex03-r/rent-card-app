
import { CarList } from "../Components/CarList"
import { Footer } from "../Components/Footer"

import { HowWork } from "../Components/HowWork"

import Cars from "../data/cars.json"

import Card from "../assets/hero_1_a.jpg"
import "../styles/style.css"


export function HomeScreen() {



    return (
        <div>
            <section>
          
                <div className="hero" style={{ backgroundImage: `url(${Card})`, backgroundSize: "cover" }}>
                </div>
            </section>
            <section>
                <HowWork />
            </section>
            <section>
                <CarList isSearchEnabled={false}  cars={Cars.slice(0, 6)} />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}