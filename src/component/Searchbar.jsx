import React from "react";
import Container from "../utils/Container";

const Searchbar = ({ setSearchCountry, searchCountry }) => {
  return (
    <Container>
      <div className="flex justify-between py-4">
        <div className="shadow-md border border-gray-100 py-1 px-3">
          <input
            type="text"
            placeholder="Search..."
            className="p-1 border-0 outline-0"
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
          />
        </div>
        <div className="">
          <select name="" id="">
            <option value="america">America</option>
            <option value="africa">Africa</option>
          </select>
        </div>
      </div>
    </Container>
  );
};

export default Searchbar;
