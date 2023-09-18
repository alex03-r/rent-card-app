import { TestimonialItem } from "./TestimonialItem";

import "../styles/style.css"
import { TestimonialProps } from "./TestimonialItem";


export function TestimonialList({ testimonials }: { testimonials: TestimonialProps[] }) {



    return (
        <div className="site-section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h2 className="section-heading"><strong>Testimonials</strong></h2>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="row">
                    {
                        testimonials.map(testimonial => <TestimonialItem key={testimonial.id} {...testimonial} />)
                    }

                </div>
            </div>
        </div>
    )





}