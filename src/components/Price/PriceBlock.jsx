import React from "react";

const PriceBlock = ({
  bgColor,
  textStyle,
  price,
  textInfo,
  padding,
  radius,
}) => {
  return (
    <div
      className={`w-[200px] ${padding} ${radius} ${bgColor} text-white h-[80px]`}
    >
      <h2 className="uppercase text-sm font-semibold text-center">
        {textInfo}:
      </h2>
      <p className={`text-center ${textStyle} text-2xl`}>{price} грн.</p>
    </div>
  );
};
export default PriceBlock;
