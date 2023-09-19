

import "../styles/style.css"
export interface TestimonialProps{
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
    describtion:string;

}

export function TestimonialItem(props:TestimonialProps) {

    return (<div className="col-lg-4 mb-4">
        <div className="testimonial-2">
            <blockquote className="mb-4">
                <p> { props.describtion.slice(0, 100) + "..." }</p>
              
            </blockquote>
            <div className="d-flex v-card align-items-center">
                <img src={props.avatar} alt="Image" className="img-fluid mr-3" />
                <div className="author-name ms-2">
                    <span className="d-block">{props.first_name}</span>
                    <span>{props.email}</span>
                </div>
            </div>
        </div>
    </div>)
}