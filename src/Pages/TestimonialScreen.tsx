
import  Testimonials from  "../data/testimonials.json"
import { TestimonialList } from "../Components/TestimonialList"
import { Footer } from "../Components/Footer"

export function TestimonialScreen(){


    return(
        <div>
            <TestimonialList testimonials={Testimonials} />
            <Footer />
        </div>
    )
}