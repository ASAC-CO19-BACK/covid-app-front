
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import cookie from 'react-cookies';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';

export default function MyRecordCard(props) {

    const DeleteRec = (id) => {
        axios.delete(`https://asac-co19-back-backend.onrender.com/deleteRecord/${id}`, {
            headers: {
                'Authorization': `Bearer ${cookie.load("token")}`
            }
        }).then(res => {
            console.log(res.data)
        }).then(() => {
            window.location.reload(false);

        })
    }
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>

                    <Typography style={{ color: "rgb(210, 61, 111)", fontSize: "19px" }} gutterBottom variant="body2" component="div">
                        Country:  {props.country}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Date:  {props.Date}
                    </Typography>
                </CardContent>
                <CardActions id='add-rec'>

                    <Button onClick={() => {
                        DeleteRec(props.id)
                    }} style={{ marginLeft: "100px" }} id='btn' variant="contained">DELETE</Button>
                </CardActions>
            </Card>
        </>
    )
} 