"use client";
import React from "react";
import { PlacesData } from "../../../store/places";
import { faker } from "@faker-js/faker";
import Link from "next/link";

const TripCard = ({ plan }: { plan: (typeof PlacesData)[0] }) => {
  const { id, name, desc } = plan;

  return (
    <div className="bg-white border-hover border shadow-md rounded-md p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
      <h2 className="text-xl text-button font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{desc}</p>
      <p className="text-gray-600 mb-2">
        Duration: {faker.datatype.number({ min: 4, max: 12 })}
      </p>
      </div>
      <Link href={`/DASHBOARD/DestinationPage/v/${id}`}>
        <button className="py-2 px-3 w-full bg-hover hover:bg-hover/80 text-slate-900 rounded-md">
          Navigate
        </button>
      </Link>
    </div>
  );
};

export default TripCard;
