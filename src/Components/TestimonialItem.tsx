
import Yo from  "../assets/yo.jpeg"
import "../styles/style.css"
export interface TestimonialProps{

    id:number;
    name:string;
    job:string;


}

export function TestimonialItem(props:TestimonialProps) {

    return (<div className="col-lg-4 mb-4">
        <div className="testimonial-2">
            <blockquote className="mb-4">
                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
            </blockquote>
            <div className="d-flex v-card align-items-center">
                <img src={Yo} alt="Image" className="img-fluid mr-3" />
                <div className="author-name">
                    <span className="d-block">{props.name}</span>
                    <span>{props.job}</span>
                </div>
            </div>
        </div>
    </div>)
}