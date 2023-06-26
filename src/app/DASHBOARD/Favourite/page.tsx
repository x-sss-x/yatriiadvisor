import FavoritePlaces from "@/components/Fav";
import React from "react";

const page = () => {
  return (
    <div className="py-20">
      <h2 className="text-3xl px-10 font-semibold">Favrouits Destinations</h2>
      <FavoritePlaces />
    </div>
  );
};

export default page;
