import "./card-list.styles.css";
import Card from "../card/card.component";
import { useState } from "react";
const CardList = () => {
  const { monsters } = useState;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
