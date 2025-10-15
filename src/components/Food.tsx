import React from "react";
import type { Item } from "../data/items";
  type Props = {
    item: Item;
    onToggle: (id: string) => void;
  active: boolean;
  }
const Foods: React.FC<Props> = ({ item, onToggle, active }) => {
  return (
    <>
      <div className={`food ${active ? "food--active" : ""}`} onClick={() => onToggle(item.id)}>
        <div className="food__name">{item.label}</div>
        <div className="food__score">{item.score}</div>
      </div>
    </>
  );
};
export default Foods;
