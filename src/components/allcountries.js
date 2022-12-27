import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


export default function AllCountries() {
    const [allContriesSummary, setAllCountriesSummary] = useState([])

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary').then(response => {
            console.log(response.data.Countries)
            setAllCountriesSummary(response.data.Countries)
            // console.log(11111, allContriesSummary)
        })
    }, []);

    return (
        <>
            <h3>
                Covid 19 Statistics For all countires
            </h3>
            <div className='result-card'>


                {allContriesSummary ?
                    allContriesSummary?.map(ele => {
                        return (

                            <div id='card-id'>
                                <Card  sx={{ maxWidth: 345 }}>
                                    <CardContent>

                                        <Typography style={{ color: "rgb(210, 61, 111)", fontSize: "19px" }} gutterBottom variant="body2" component="div">
                                            Country:  {ele.Country},{ele.CountryCode}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Total  confirmed cases : {ele.TotalConfirmed}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Total  Deaths cases : {ele.TotalDeaths}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Total Recovered cases : {ele.TotalRecovered}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Date:  {ele.Date}
                                        </Typography>
                                    </CardContent>
                                    <CardActions id='add-rec'>
                                        <Button style={{marginLeft:"70px",width:"130px"}} id='btn' variant="contained" onClick={() => {
                                            axios.post('http://localhost:3000/AddRecord', {
                                                country: ele.Country,
                                                totalConfirmedCases: ele.TotalConfirmed,
                                                totalDeathCases: ele.TotalDeaths,
                                                totalRecoveredCases: ele.TotalRecovered,
                                                Date: ele.Date
                                            }, {
                                                headers: {
                                                    'Authorization': `Bearer ${cookie.load("token")}`
                                                }
                                            }).then(res => {
                                                console.log(res.data)
                                            })
                                        }} size="small">ADD TO MY RECORDS</Button>
                                    </CardActions>
                                </Card>
                            </div>

                        )
                    }) : null
                }
            </div>
        </>
    )
}