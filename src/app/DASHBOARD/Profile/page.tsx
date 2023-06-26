"use client";

import React from "react";
import ProfilePic from "@/components/ProfilePic";

import ProfileDetails from "@/components/PD";

const page = () => {
  return (
    <div className="p-20 flex justify-center">
      <div className="bg-white p-10 rounded-md shadow-sm  w-1/2">
        <div className="column">
          <ProfilePic />
        </div>
        <div className="column">
          <ProfileDetails
            name={"Vishal"}
            address={"Banglore"}
            location={"KR puram"}
            mobile={"+91 709085689"}
            mailID={"vishal@gmail.com"}
            interestedPlace={"Ooty"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
