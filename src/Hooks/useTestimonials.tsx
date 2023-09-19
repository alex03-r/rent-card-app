

import { useState, useEffect } from 'react';
import { TestimonialProps } from '../Components/TestimonialItem';


export function useTestimonials(page: number = 1) {

    const [data, setData] = useState<TestimonialProps[]>([])

    const [isLoading, setIsLoading] = useState(true)
    const urlUsers = `https://reqres.in/api/users?page=${page}`
    const urlComents = "https://jsonplaceholder.typicode.com/comments"

    useEffect(() => {



        callAndSetValues()


    }, [page])


    async function callAndSetValues() {

        setIsLoading(true)
        const users = await fetch(urlUsers)
        const coments = await fetch(urlComents)

        Promise.all([users.json(), coments.json()]).then(values => {
            const resultUsers = values[0].data;
            const resultComents = values[1];
            const finalResult = resultUsers.map((user) => {

                let describtion = resultComents.find((coment) => coment.id === user.id)?.body;
                return { ...user, describtion }
            })
            setData(finalResult)
            setIsLoading(false)
        })
    }

    return { data, isLoading }
}
