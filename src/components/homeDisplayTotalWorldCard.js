import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function HomeDisplayTotalWorldCard(props) {
    return (<>

        <div className='card-div'>

            <Card style={{ backgroundColor: "rgb(210, 61, 111)", color: "#fff" }} sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="body2">
                        Total confirmed : {props.TotalConfirmed
                        }
                    </Typography>
                </CardContent>

            </Card>
        </div>
        <div className='card-div'>

            <Card style={{ backgroundColor: "rgb(210, 61, 111)", color: "#fff" }} sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="body2">
                        Total Deaths : {props.TotalDeaths}
                    </Typography>
                </CardContent>

            </Card>
        </div>
        <div className='card-div'>

            <Card style={{ backgroundColor: "rgb(210, 61, 111)", color: "#fff" }} sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="body2">
                        Total Recovered : {props.TotalRecovered}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    </>
    )
}