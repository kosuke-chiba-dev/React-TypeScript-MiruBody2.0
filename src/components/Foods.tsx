  import Food from "./Food";
import { ITEMS, type Group } from "../data/items";

  type Props = {
    group: Group;
      selectedIds: string[];
  onToggle: (id: string) => void;
  }

const Foods: React.FC<Props> = ({group, onToggle, selectedIds}) => {
  
  const list = ITEMS.filter(item => {
    return item.group === group
  })
  return (
    <>
      <div className="foods-container">
        <div className="foods">
          {list.map((item) => { 
            return (
              <Food key={item.id} item={item} onToggle={onToggle} active={selectedIds.includes(item.id)}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Foods