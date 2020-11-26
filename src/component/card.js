import React, { useState } from "react";
import "./card.css";

function Card(params) {
  const [like, setLike] = useState(params.like);

  console.log("like", like);

  return (
    <div className="card">
      <div className="card_img"></div>
      <div className="card_title">{params.title}</div>
      <div className="card_price">{params.price}</div>
      <div
        style={like ? { color: "red" } : { color: "black" }}
        onClick={() => setLike(!like)}
        className="like"
      >
        <div>лайк</div>
      </div>
    </div>
  );
}

export default Card;
