

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../Pages/HomeScreen"
import { TestimonialScreen } from "../Pages/TestimonialScreen"
import { ListingScreen } from "../Pages/ListingScreen"
import { Header } from "../Components/Header"
import { RentScreen } from "../Pages/RentScreen"




export function AppRouter() {




    return (

        <>

            <BrowserRouter>

                <Header />
                <Routes >
                    <Route path="/" element={<HomeScreen />}></Route>
                    <Route path="/listing" element={<ListingScreen />}></Route>
                    <Route path="/testimonial" element={<TestimonialScreen />}></Route>
                    <Route path="/contact" element={<HomeScreen />} ></Route>
                    <Route path="/rent/:id" element={ <RentScreen /> } > </Route>
                    <Route path="/*" element={<HomeScreen />}></Route>
                </Routes>
            </BrowserRouter>


        </>

    )
}