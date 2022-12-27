import './homeDisplay.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function HomeDisplay() {
    const [Total, setTotal] = useState({})
    const [userCountry, setUserCountry] = useState("")
    const [userStartingDate, setStartingDate] = useState("")
    const [userEndingDate, setEndingDate] = useState("")
    const [userResult, setUserResult] = useState([])
    const [allCountries, setAllCountries] = useState([])
    useEffect(() => {
        axios.get('https://api.covid19api.com/world/total').then(response => {
            console.log(response.data)
            setTotal(response.data)
            console.log(11111, Total)
        })
    }, []);
    useEffect(() => {
        getCountries()

    }, [Total])
    const getCountries = () => {
        axios.get('https://api.covid19api.com/countries').then(response => {
            console.log(response.data)
            setAllCountries(response.data)
            console.log(22222, allCountries)

        })
    }
    const userCountryInput = (e) => {
        console.log(3333, e.target.value)
        setUserCountry(e.target.value)
    }
    const userStartingDateInput = (e) => {
        console.log(4444, e.target.value)
        setStartingDate(e.target.value)

    }
    const userEndingDateInput = (e) => {
        console.log(55555, e.target.value)
        setEndingDate(e.target.value)

    }
    const handleSubmit = () => {
        axios.get(`https://api.covid19api.com/country/${userCountry}/status/confirmed?from=${parseInt(userStartingDate)}T00:00:00Z&to=${parseInt(userEndingDate)}T00:00:00Z`
        ).then(res => {
            console.log(7777, res.data);
            setUserResult(res.data)
            console.log(888888, userResult)
        })
    }
    return (
        <>
            <h2>
                world Total Statistics
            </h2>
            <div className='main-cards-div'>
                <div className='card-div'>

                    <Card style={{ backgroundColor: "rgb(210, 61, 111)", color: "#fff" }} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="body2">
                                Total confirmed : {Total.TotalConfirmed
                                }
                            </Typography>
                        </CardContent>

                    </Card>
                </div>
                <div className='card-div'>

                    <Card style={{ backgroundColor: "rgb(210, 61, 111)", color: "#fff" }} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="body2">
                                Total Deaths : {Total.TotalDeaths}
                            </Typography>
                        </CardContent>

                    </Card>
                </div>
                <div className='card-div'>

                    <Card style={{ backgroundColor: "rgb(210, 61, 111)", color: "#fff" }} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="body2">
                                Total Recovered : {Total.TotalRecovered}
                            </Typography>
                        </CardContent>

                    </Card>
                </div>
            </div>
            <h3>Get Statistics For a Specific Country </h3>

            <div className='specefic-rate'>
                <div className='countires-div'>
                    <label for="countries"> Countries </label>

                    <select name="countries" id="countries" onChange={(e) => userCountryInput(e)} >
                        <optgroup label="All Countries">
                            {allCountries.map(ele => {
                                return (
                                    <option value={ele.Country}> {ele.Country}</option>

                                )
                            })
                            }
                        </optgroup>
                    </select>
                    <label for='From'> From :
                        <input type="date" id="From" name="From" onChange={(e) => userStartingDateInput(e)} />
                    </label>
                    <label for='until'> until :
                        <input type="date" id="until" name="until" onChange={(e) => userEndingDateInput(e)} />
                    </label>
                </div>
                <div>
                </div>
                <button type="submit" onClick={handleSubmit} ><i class="fa fa-search"></i>search</button>
            </div>
            <div className='result-card'>


                {userResult.map(ele => {
                    return (

                        <div style={{height:"70px"}} id='card-id'>
                            <Card  sx={{ maxWidth: 345 }}>
                                <CardContent>

                                    <Typography  style={{ color: "rgb(210, 61, 111)", fontSize: "19px" }} gutterBottom variant="body2" component="div">
                                        Date:  {ele.Date}
                                    </Typography>
                                    <Typography  variant="body2" color="text.secondary">
                                        number of confirmed cases : {ele.Cases}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>

                    )
                })
                }
            </div>
        </>

    )
}


