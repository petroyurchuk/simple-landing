import ListItem from "./ListItem";
import featuresData from "../../utils/FeaturesData";
const List = () => {
  return (
    <div>
      {featuresData.map(({ id, image, title, description }) => (
        <ListItem
          key={id}
          image={image}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};
export default List;
