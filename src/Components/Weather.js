import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
  const display = useSelector(selectDisplay);
  const [weather, setWeather] = useState();

  const latitude = display.capitalInfo.latlng[0];
  const longitude = display.capitalInfo.latlng[1];

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        "X-RapidAPI-Key": "6aa090a9a8msh87a8f2a8785a091p17544djsn26718026fd8f",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWeather(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [latitude, longitude]);

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Conditions: </td>
          <td>{weather?.current?.condition?.text}</td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td>{weather?.current.temp_f} degrees Fahrenheit</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
        </tr>
        <tr>
          <td>Humidity: </td>
          <td>{weather?.current?.humidity}%</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          <td>
            {weather?.current?.wind_mph} mph {weather?.current?.wind_dir}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
