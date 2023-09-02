import React from "react";

const ListItem = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img
          className="w-[250px] max-h-[184px] rounded-3xl object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="max-w-[320px] my-[15px]">
        <h2 className="font-bold text-white text-center">{title}</h2>
        <p className="text-white text-center text-[15px] italic">
          {description}
        </p>
      </div>
    </div>
  );
};
export default ListItem;
