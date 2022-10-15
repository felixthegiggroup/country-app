import React from "react";

const CountryList = ({ country }) => {
  console.log(country);
  return (
    <div>
      <h1 className="my-3">{country.name.common}</h1>
      <img src={country.flags.png} alt="" className="w-full h-[100px]" />
    </div>
  );
};

export default CountryList;
