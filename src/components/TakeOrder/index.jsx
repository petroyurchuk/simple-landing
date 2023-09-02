import React from "react";
import { Link } from "react-scroll";

const TakeOrder = () => {
  return (
    <Link
      to="форма"
      smooth={true}
      className="block m-auto min-w-[310px] max-w-[400px] h-[80px] rounded-[40px] shadow-lg shadow-black font-bold text-[20px] leading-[80px] text-[#724b00] uppercase text-center cursor-pointer bg-[#f9c802] transition-all duration-200 hover:tracking-wider mt-[15px]"
    >
      Замовити зі знижкою
    </Link>
  );
};
export default TakeOrder;
