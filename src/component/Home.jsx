import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../api/fetchDataFromApi";
import Container from "../utils/Container";
import CountryList from "./CountryList";
import Searchbar from "./Searchbar";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [getErro, setGetError] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      setLoading(true);
      try {
        // const res = await fetch("https://restcountries.com/v3.1/all");
        // const data = res.json();
        // console.log(setCountries(data));
        const res = await axios.get(
          searchCountry
            ? fetchDataFromApi(`/name/${searchCountry}`)
            : fetchDataFromApi("/all")
        );
        setCountries(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        setTimeout(() => {
          if (error.request.status === 404) {
            // setGetError(error.message);
            setGetError("Please check your api or network");
            setLoading(false);
          }
        }, 5000);
      }
    };

    getCountry();
  }, [searchCountry]);
  if (getErro) {
    return <h1>{getErro}</h1>;
  }
  return (
    <div className="py-4">
      <Searchbar
        setSearchCountry={setSearchCountry}
        searchCountry={searchCountry}
      />
      <Container>
        {loading && <h1>Loading</h1>}
        <div className="grid grid-cols-4 gap-3 py-6">
          {countries?.slice(0, 12).map((country, i) => (
            <CountryList key={i} country={country} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
