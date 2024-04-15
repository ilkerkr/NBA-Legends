import React, { useState } from "react";
import "./TextCards.css";

const TextCards = ({ player }) => {
  const { img, name, statistics } = player;
  const [show, setShow] = useState(false);
  return (
    <div className="textcard" onClick={()=> setShow(!show)}>
      {!show ? (
        <img src={img} alt="" className="textimg" />
      ) : (
        <>
          <h3 className="name">{name}</h3>
          {statistics.map((item) => (
            <ul>
              <li>🏀 {item}</li>
            </ul>
          ))}
        </>
      )}
    </div>
  );
};

export default TextCards;
