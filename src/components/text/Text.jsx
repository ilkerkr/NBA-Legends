import React, { useState } from "react";
import "./Text.css";
import { data } from "../../helpers/data";
import TextCards from "./TextCards";

const Text = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const filteredData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase().trim()));
  return (
    <div>
      <div className="textinput">
        <input type="search" placeholder="Search Player..." onChange={handleChange} />
      </div>
      <div className="player">
        {filteredData.map((player, index) => (
          <TextCards key={index} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Text;
