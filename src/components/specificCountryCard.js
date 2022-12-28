import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function SpecificCountryCard(props){
    return(<>
      <Card  sx={{ maxWidth: 345 }}>
                                <CardContent>

                                    <Typography  style={{ color: "rgb(210, 61, 111)", fontSize: "19px" }} gutterBottom variant="body2" component="div">
                                        Date:  {props.Date}
                                    </Typography>
                                    <Typography  variant="body2" color="text.secondary">
                                        number of confirmed cases : {props.Cases}
                                    </Typography>
                                </CardContent>
                            </Card>
    </>
    )
}