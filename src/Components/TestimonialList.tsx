import { TestimonialItem } from "./TestimonialItem";
// import Card from "../assets/hero_1_a.jpg"
import "../styles/style.css"
import { TestimonialProps } from "./TestimonialItem";
import { NoDetailsFound } from "./NoDetailsFound";


export function TestimonialList({ testimonials, page, onNext, onBefore }: { testimonials: TestimonialProps[], page: number, onNext: () => void, onBefore: () => void }) {

   

    return (
        <div className="site-section bg-light">
            <div className="container">
                <div className="row">
                    {/* style={{ backgroundImage:`url(${Card})` , backgroundSize:"cover", backgroundPosition:'top' }} */}
                    <div className="col-lg-7">
                        <h2 className="section-heading"><strong>Testimonials</strong></h2>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                {testimonials.length == 0 ? <NoDetailsFound title="Sorry no testimonials found" /> :
                    <>
                        <div className="row">
                            {
                                testimonials.map(testimonial => <TestimonialItem key={testimonial.id} {...testimonial} />)
                            }

                        </div>

                        <div className="text-end d-flex justify-content-end">

                            <button className="btn btn-primary " disabled={page == 1 ? true : false} onClick={onBefore} >Before</button>
                            <button className="btn btn-primary ms-2 " disabled={page == 2 ? true : false} onClick={onNext} >Next</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )





}