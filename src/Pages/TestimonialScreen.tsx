
import { useState } from 'react';

import { TestimonialList } from "../Components/TestimonialList"
import { Footer } from "../Components/Footer"
import { useTestimonials } from "../Hooks/useTestimonials"
import Loading from '../Components/Loading';

export function TestimonialScreen() {

    const[ page, setPage ] = useState(1)
    const {  data , isLoading } = useTestimonials(page);

    function onNext(){

        setPage(page + 1)
    }
    function onBefore(){

        setPage(page - 1)
    }



    return (
        <div>
            { isLoading ?  <Loading /> : 
            
               <TestimonialList testimonials={data!} onNext={onNext} page={page} onBefore={onBefore} /> 
             
            }
        
     
            <Footer />
        </div>
    )
}