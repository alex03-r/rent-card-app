

import React from "react"
import Menu from "../data/menu.json"
import { useNavigate } from "react-router-dom"

export function HamburgerMenu({ setIsMenuOpen }:{ setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>  }) {

    const navigate = useNavigate()


    function onNavigate(root:string){

        setIsMenuOpen(false)
        navigate(`/${root}`)

    }


    return (
        <div className="bg-light d-block  d-md-none " style={{ position: "absolute", left: "10px", width: "70%", height: "auto", zIndex: "5" }} >
            <ul className="d-flex flex-column gap-2 ">
                {
                    Menu.map(menuItem => (  <li onClick={ () => onNavigate(menuItem.routeName) } key={menuItem.id} style={{ listStyle: "none", cursor: "pointer", marginTop:"" }} className=""><p className="nav-link">{ menuItem.text }</p></li>   ))
                }
            </ul>
        </div>



    )
}