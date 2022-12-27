import './footer.css'
import { When } from 'react-if';
import { AuthContext } from '../context/auth';
import { useContext } from "react";

export default function Footer() {
    const authContext = useContext(AuthContext);

    return (
        <When condition={authContext.isLoggedIn}>

        <div id='div-footer'>
            <p>
                All Rights reserved 2022
            </p>
        </div>
        </When>
    )
}