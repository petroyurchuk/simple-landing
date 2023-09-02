import Discount from "../Discount";
import PriceBlock from "./PriceBlock";

const Price = () => {
  return (
    <div className="flex relative justify-center rou">
      <PriceBlock
        radius={"rounded-l-[50px]"}
        padding={"pr-10 pt-5"}
        price={870}
        textInfo={"Звичайна ціна"}
        bgColor={"bg-red-500"}
        textStyle={"line-through"}
      />
      <Discount />
      <PriceBlock
        radius={"rounded-r-[50px]"}
        padding={"pl-10 pt-5"}
        price={564}
        textInfo={"Ціна по знижці"}
        bgColor={"bg-green-500"}
        textStyle={" "}
      />
    </div>
  );
};
export default Price;
