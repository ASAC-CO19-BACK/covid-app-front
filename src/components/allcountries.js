import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AllCountriesCard from './allCountriesCard';

export default function AllCountries() {
    const [allContriesSummary, setAllCountriesSummary] = useState([])

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary').then(response => {
            console.log(response.data.Countries)
            setAllCountriesSummary(response.data.Countries)
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
                                <AllCountriesCard Country={ele.Country} CountryCode={ele.CountryCode} TotalConfirmed={ele.TotalConfirmed} TotalDeaths={ele.TotalDeaths} TotalRecovered={ele.TotalRecovered} Date={ele.Date} />
                            </div>

                        )
                    }) : null
                }
            </div>
        </>
    )
}