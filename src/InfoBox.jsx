import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'

export default function InfoBox({initialResult}){

    

    const RAINY_URL="https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   

    return(
        <div className='InfoBox'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={initialResult.humidity>80? RAINY_URL : initialResult.temp>18?HOT_URL : COLD_URL}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {initialResult.city}&nbsp;
                        {initialResult.humidity>80? <ThunderstormIcon/> : initialResult.temp>18? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temp: {initialResult.temp}&deg;C</p>
                        <p>Max-Temp: {initialResult.tempMax}&deg;C</p>
                        <p>MIn-Temp: {initialResult.tempMin}&deg;C</p>
                        <p>Humidity: {initialResult.humidity}</p>
                        <p>Weather described as <i>{initialResult.weather}</i> and feels like {initialResult.feelsLike}&deg;C</p>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}