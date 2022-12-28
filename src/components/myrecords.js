import * as React from 'react';

import { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

import './homeDisplay.css'
import { When } from 'react-if';
import logo from '../asserts/covid2.PNG'
import { AuthContext } from '../context/auth';
import MyRecordCard from './myRecordCard';
export default function MyRecords() {
    const authContext = React.useContext(AuthContext)
    const [allrecords, setAllRecords] = useState([])
    useEffect(() => {
        axios.get('https://asac-co19-back-backend.onrender.com/getRecords', {
            headers: {
                'Authorization': `Bearer ${cookie.load("token")}`
            }
        }).then(res => {
            console.log(res.data)
            setAllRecords(res.data)
        })
    }, [])
   
    return (
        <>
            <div className='result-card'>

                <When condition={allrecords}>


                    {
                        allrecords?.map(ele => {
                            return (

                                <div id='card-id'>
                                    <MyRecordCard id={ele.id} country={ele.country} Date={ele.Date}/>
                                </div>
                            )
                        })


                    }
                </When>
            </div>
            <When condition={allrecords == ''}>
                <When condition={authContext.isLoggedIn == true}>


                    <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: "70px" }} src={logo} alt="covid header BG" />

                </When>
            </When>
        </>


    )
}
