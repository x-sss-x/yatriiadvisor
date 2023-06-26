"use client";
import React, { useState } from "react";
import { useAppSelector } from "../../../store";
import {
  FavroitesSelector,
  PlacesData,
  PlacesSelector,
  addOnePlaceToFav,
  removeOnePlaceToFav,
} from "../../../store/places";
import { AiFillHeart, AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
import Link from "next/link";
import { useAppDispatch } from "../../../store/hooks";

const Destinations: React.FC = () => {
  const [searchSeason, setSearchSeason] = useState("");
  const [searchState, setSearchState] = useState("");
  const destinationsData = useAppSelector(PlacesSelector.selectAll);

  // Filter destinations based on search criteria
  const filteredDestinations = destinationsData.filter(
    (destination: { season: string; state: string }) =>
      destination.season.toLowerCase().includes(searchSeason.toLowerCase()) &&
      destination.state.toLowerCase().includes(searchState.toLowerCase())
  );

  return (
    <div>
      <div className="flex space-x-4 pb-4  justify-center mb-4">
        <input
          type="text"
          placeholder="Search by season"
          value={searchSeason}
          onChange={(e) => setSearchSeason(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded"
        />

        <input
          type="text"
          placeholder="Search by state"
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded"
        />
      </div>

      {filteredDestinations.length > 0 ? (
        <ul className="grid grid-cols-3 gap-4">
          {filteredDestinations.map((destination) => (
            <DestCard key={destination.id} destination={destination} />
          ))}
        </ul>
      ) : (
        <p className="text-red-500 font-roboto font-bold text-2xl">
          No destinations found
        </p>
      )}
    </div>
  );
};

export const DestCard = ({
  destination,
}: {
  destination: (typeof PlacesData)[0];
}) => {
  return (
    <li
      key={destination.id}
      className="bg-white shadow rounded hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <Link href={`/DASHBOARD/DestinationPage/v/${destination.id}`}>
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover rounded-t cursor-pointer"
        />
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold mb-2">{destination.name}</h2>
          <LikeButton dest={destination} />
        </div>
        <p className="text-sm text-gray-500 mb-2">
          Season: {destination.season}
        </p>
        <p className="text-sm text-gray-500 mb-2">State: {destination.state}</p>
        <p className="text-sm text-gray-500">
          {destination.desc.slice(0, 160) + " ..."}
        </p>
      </div>
    </li>
  );
};
export const LikeButton = ({ dest }: { dest: (typeof PlacesData)[0] }) => {
  const fav = useAppSelector(FavroitesSelector.selectIds);

  const isLiked = fav.includes(dest.id);
  const dispatch = useAppDispatch();

  const onLikeToggle = () => {
    if (!isLiked) {
      dispatch(addOnePlaceToFav(dest));
      alert("Added to favroites");
    } else {
      dispatch(removeOnePlaceToFav(dest.id));
      alert("Removed From favroites");
    }
  };

  return (
    <button
      onClick={onLikeToggle}
      className="h-10 transition-all duration-300 w-10 flex items-center justify-center text-slate-700 hover:bg-pink-200 hover:text-pink-500 rounded-full"
    >
      {isLiked ? (
        <AiFillHeart className="text-2xl text-pink-500" />
      ) : (
        <AiOutlineHeart className="text-2xl " />
      )}
    </button>
  );
};

export default Destinations;
