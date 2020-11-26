import React from "react";
import Card from "../component/card";
import "./main.css";
import home from "../img/house.png";

const data = [
  { id: 1, name: "ЖК Первый", img: home, price: "200K", like: false },
  { id: 2, name: "ЖК Второй", img: home, price: "200K", like: false },
  { id: 3, name: "ЖК Третий", img: home, price: "200K", like: false },
  { id: 4, name: "ЖК Четвертый", img: home, price: "200K", like: false },
  { id: 5, name: "ЖК Пятый", img: home, price: "200K", like: false },
];

function Main() {
  console.log(home);

  let cards = data.map((item) => (
    <Card
      key={item.id}
      title={item.name}
      img={item.home}
      price={item.price}
      like={item.like}
    />
  ));

  return (
    <div className="main_page">
      <div className="container">
        <div className="main_content">{cards}</div>
      </div>
    </div>
  );
}

export default Main;
