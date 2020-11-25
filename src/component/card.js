import React, { useState } from "react";

function Card(params) {
  const [like, setLike] = useState(false);

  console.log("like", like);

  return (
    <div className="card">
      <div className="card_img">Здесь картинка</div>
      <div className="card_title">Это НАЗВАНИЕ</div>
      <div className="card_price"> ЭТО ЦЕНА </div>
      <div onClick={() => setLike(!like)}>
        <div>лайк</div>
      </div>
    </div>
  );
}

export default Card;
