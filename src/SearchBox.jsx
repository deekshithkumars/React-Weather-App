import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updatedInfo}){

    let [city,setCity]=useState("")
    let [err,setErr]=useState(false)

    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="13fa0453c9b6fbc04e96db4dbbf2cb66"

    let getWeather=async()=>{
      try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse=await response.json()
        // console.log(jsonResponse)
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMax:jsonResponse.main.temp_max,
            tempMin:jsonResponse.main.temp_min,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        }
        console.log(result)
        return result
      }catch(err){
        throw err;
      } 
    }

    let handleInput=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault()
            console.log(city)
            setCity("")
            let newInfo=await getWeather()
            updatedInfo(newInfo)
        }catch(err){
            setErr(true);    
        }
       
    }

    return(
        <div className='SearchBox'>
             {err &&  <Stack style={{margin:"auto"}} sx={{ width: '50%' }} spacing={2}>
                        <Alert variant="outlined" severity="error">
                            Such city does not exist
                        </Alert>
                    </Stack>}
                    <br></br>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="city name" variant="outlined" onChange={handleInput} value={city} required/>
                <br></br><br></br>
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>

    )
}