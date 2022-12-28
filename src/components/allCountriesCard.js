
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import cookie from 'react-cookies';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

export default function AllCountriesCard(props) {
const AddRecord =(Country,TotalConfirmed,TotalDeaths,TotalRecovered,Date)=>{
    axios.post('https://asac-co19-back-backend.onrender.com/AddRecord', {
        country: Country,
        totalConfirmedCases: TotalConfirmed,
        totalDeathCases: TotalDeaths,
        totalRecoveredCases: TotalRecovered,
        Date: Date
    }, {
        headers: {
            'Authorization': `Bearer ${cookie.load("token")}`
        }
    }).then(res => {
        console.log(res.data)
    })
}

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>

                    <Typography style={{ color: "rgb(210, 61, 111)", fontSize: "19px" }} gutterBottom variant="body2" component="div">
                        Country:  {props.Country},{props.CountryCode}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Total  confirmed cases : {props.TotalConfirmed}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Total  Deaths cases : {props.TotalDeaths}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Total Recovered cases : {props.TotalRecovered}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Date:  {props.Date}
                    </Typography>
                </CardContent>
                <CardActions id='add-rec'>
                    <Button style={{ marginLeft: "70px", width: "130px" }} id='btn' variant="contained" onClick={() => {
                        AddRecord(props.Country,props.TotalConfirmed,props.TotalDeaths,props.TotalRecovered,props.Date)
                    }} size="small">ADD TO MY RECORDS</Button>
                </CardActions>
            </Card>
        </>
    )
} 