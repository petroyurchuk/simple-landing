import advantagesData from "../../utils/AdvantagesData";
import ListItem from "./ListItem";
const List = () => {
  return (
    <ol className="list-decimal flex flex-col items-center px-[10px]">
      {advantagesData.map(({ id, advantage }) => (
        <ListItem key={id} advantage={advantage} />
      ))}
    </ol>
  );
};
export default List;
