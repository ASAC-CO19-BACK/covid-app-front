import SignIn from './login';
import { When } from 'react-if'
import { AuthContext } from '../context/auth';
import React, { useContext } from 'react';
import HomeDisplay from './homedisplay';
import Button from '@mui/material/Button';

function Home() {
    const authContext = useContext(AuthContext)
    return (
        <>
    <When condition={authContext.isLoggedIn}>

            <Button style={{ float: "right", marginTop: "16px" }} id='btn' variant="contained"
                    onClick={(e) => {
                        e.preventDefault();
                        authContext.signOut();
                    }}
                    >sign out</Button>
                    <HomeDisplay/>
    </When>
       
            <When condition={!authContext.isLoggedIn}>

                <SignIn />
            </When>

        </>
    )
}
export default Home;
