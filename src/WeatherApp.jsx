import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){

    let [info,setInfo]=useState({
        city: "Bengaluru",
        weather: "moderate rain",
        feelsLike: 25.04,
        humidity: 86,
        temp: 24.31,
        tempMax: 24.72,
        tempMin: 23.8
    })


    let updatedInfo=(newInfo)=>{
        setInfo(newInfo)
    }

    return(
        <div>
            <h1 style={{textAlign:"center"}}>Weather App by Spoorthi</h1>
            <SearchBox updatedInfo={updatedInfo}/>
            <InfoBox initialResult={info}/>
        </div>
    )
}
