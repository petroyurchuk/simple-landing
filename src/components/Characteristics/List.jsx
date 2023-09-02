import React from "react";
import CharacteristicsData from "../../utils/CharacteristicsData";
import ListItem from "./ListItem";

const List = () => {
  return (
    <ul className=" ">
      {CharacteristicsData.map(({ id, character }) => (
        <li key={id}>
          <ListItem character={character} />
        </li>
      ))}
    </ul>
  );
};
export default List;
