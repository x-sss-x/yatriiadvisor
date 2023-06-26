"use client";
import React from "react";
import { DestCard } from "./Destination/Destination";
import { useAppSelector } from "../../store";
import { FavroitesSelector, PlacesSelector } from "../../store/places";

const FavoritePlaces = () => {
  const destinations = useAppSelector(FavroitesSelector.selectAll);

  return (
    <div className="flex justify-center p-10">
      {destinations.length > 0 ? (
        <ul className="grid grid-cols-3 gap-4">
          {destinations.map((destination) => (
            <DestCard key={destination.id} destination={destination} />
          ))}
        </ul>
      ) : (
        <p className="text-red-500 font-roboto font-bold text-2xl">
          No Favorite destinations yet !
        </p>
      )}
    </div>
  );
};

export default FavoritePlaces;
