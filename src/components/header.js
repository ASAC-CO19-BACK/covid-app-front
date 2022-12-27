import './header.css'
import { Link } from "react-router-dom";
import { When } from 'react-if';
import logo from '../asserts/covid.PNG'
import { AuthContext } from "../context/auth";
import { useContext } from "react";

export default function Header() {
    const authContext = useContext(AuthContext);

    return (
        <>
            <When condition={authContext.isLoggedIn}>


                <div className="header-div">
                    
                    <img src={logo} alt="covid header BG" />
                    
                    <h1 >Covid 19 Statistics</h1>
                    <p >A website to provide you with all the updates on covid-19 statistics around the world
                    </p>
                 

                </div>
                <div className="header-nav">
                    <ul>

                        <li>

                            <Link to={'/'}>
                                Home</Link>
                        </li>
                        <li>
                            <a href="/allcontries">

                                All Contries
                            </a>
                        </li>
                        <li>
                            <a href="/myrecords">

                                My Records
                            </a>
                        </li>
                    </ul>
                </div>
          

            </When>
        </>
    )
}
