import React from "react";
import descriptionData from "../../utils/DescriptionData";
import TakeOrder from "../TakeOrder";

const Description = () => {
  return (
    <div className="py-[30px]">
      <div className="mb-[30px]">
        <h1 className="text-3xl text-[#4c4c4c] font-bold uppercase text-center">
          Економія місця
        </h1>
        <p className="text-2xl uppercase text-center text-[#4c4c4c] ">
          Та велика функціональність
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <img
            className="max-w-[365px] object-cover"
            src="/images/grill-1.jpg"
            alt="photoDescription"
          />
        </div>
        <p className="pt-[15px] mx-[20px] mb-[25px] text-center text-[18px] italic">
          {descriptionData[0]}
        </p>
      </div>
      <div>
        <p className="pt-[15px] mx-[20px] mb-[25px] text-center text-[18px] italic">
          {descriptionData[1]}
        </p>
        <div className="flex justify-center items-center">
          <img
            className="max-w-[365px] object-cover rounded-3xl"
            src="/images/grill-description-1.jpg"
            alt="sandwich"
          />
        </div>
        <p className="pt-[15px] mx-[20px] mb-[25px] text-center text-[18px] italic">
          {descriptionData[2]}
        </p>
      </div>
      <TakeOrder />
    </div>
  );
};
export default Description;
