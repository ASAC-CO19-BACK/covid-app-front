import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './homeDisplay.css'
import { When } from 'react-if';
import logo from '../asserts/covid2.PNG'
import { AuthContext } from '../context/auth';
export default function MyRecords() {
    const authContext = React.useContext(AuthContext)
    const [allrecords, setAllRecords] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/getRecords', {
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
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardContent>

                                            <Typography style={{ color: "rgb(210, 61, 111)", fontSize: "19px" }} gutterBottom variant="body2" component="div">
                                                Country:  {ele.country}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Date:  {ele.Date}
                                            </Typography>
                                        </CardContent>
                                        <CardActions id='add-rec'>

                                            <Button onClick={() => {
                                                axios.delete(`http://localhost:3000/deleteRecord/${ele.id}`, {
                                                    headers: {
                                                        'Authorization': `Bearer ${cookie.load("token")}`
                                                    }
                                                }).then(res => {
                                                    console.log(res.data)
                                                }).then(() => {
                                                    window.location.reload(false);

                                                })
                                            }} style={{ marginLeft: "100px" }} id='btn' variant="contained">DELETE</Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            )
                        })


                    }
                </When>
            </div>
            <When condition={allrecords == ''}>
            <When condition={ authContext.isLoggedIn == true}>
                
                <img style={{display:'block',marginLeft:'auto',marginRight:'auto',marginTop:"70px"}} src={logo} alt="covid header BG" />

                </When>
            </When>
        </>


    )
}
