import React from "react";

import repliesData from "../../utils/RepliesData";
const Replies = () => {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 p-[20px]">
      <h1 className="text-center text-white uppercase text-3xl font-bold mb-[15px]">
        Відгуки наших клієнтів
      </h1>
      <div className="flex flex-col gap-y-[30px]">
        {repliesData.map(({ id, imageUrl }) => (
          <img
            className="rounded-xl"
            key={id}
            src={imageUrl}
            alt={`reply ${id}`}
          />
        ))}
      </div>
    </div>
  );
};
export default Replies;
