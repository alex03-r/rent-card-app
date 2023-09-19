import { NavLink, useNavigate } from "react-router-dom"
import { HamburgerMenu } from "../Components/HaburgerMenu"
import Menu from "../data/menu.json"


import { useState } from 'react'
export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
   const navigate =  useNavigate()



    return (
        <nav className="fixed" role="banner">
            <div className="mx-5 mt-2">
                <div className=" d-flex justify-content-between align-items-center">
                    <div className=" d-flex d-md-block ">
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ cursor: "pointer", width: "20px" }} className="d-block  d-md-none mt-2">
                            <i className="bi bi-list"></i>
                        </div>
                        <div onClick={() => navigate("/") } style={{ cursor: "pointer" }} className="ms-4">
                            <p  ><strong className="fs-2">CarRental</strong></p>
                        </div>
                    </div>
                    <div className=" ml-auto d-none  d-md-block">
                        <nav className="text-right " role="navigation">
                            <ul className="d-flex gap-4 ">
                                {
                                    Menu.map(menuItem => (<NavLink key={menuItem.id} to={`/${menuItem.routeName}`} style={{ listStyle: "none", textDecoration: "none", color: "black", cursor: "pointer", marginTop: "" }} className=""><p className="nav-link">{menuItem.text}</p></NavLink>))
                                }
                            </ ul>
                        </nav>
                    </div>
                </div>
            </div>
            {isMenuOpen && <HamburgerMenu setIsMenuOpen={setIsMenuOpen} />}
        </nav>
    )
}