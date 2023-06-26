"use client";
import React, { useState } from "react";

interface ProfileDetailsProps {
  name: string;
  address: string;
  location: string;
  mobile: string;
  mailID: string;
  interestedPlace: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  name: initialName,
  address: initialAddress,
  location: initialLocation,
  mobile: initialMobile,
  mailID: initialMailID,
  interestedPlace: initialInterestedPlace,
}) => {
  const [name, setName] = useState(initialName);
  const [address, setAddress] = useState(initialAddress);
  const [location, setLocation] = useState(initialLocation);
  const [mobile, setMobile] = useState(initialMobile);
  const [mailID, setMailID] = useState(initialMailID);
  const [interestedPlace, setInterestedPlace] = useState(
    initialInterestedPlace
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Perform any save/update logic here if needed
  };

  return (
    <div className="w-full px-20 py-5 flex flex-col gap-3">
      <h3 className="font-roboto text-button font-bold">Profile Details</h3>
      <p>
        <strong className="text-hover">Name</strong>
        <div className="">
          {" "}
          {isEditing ? (
            <input className="border-b-hover rounded-lg border-2 py-2 px-3 w-full" value={name} onChange={(e) => setName(e.target.value)} />
          ) : (
            name
          )}
        </div>
      </p>
      <p>
        <strong className="text-hover">Address</strong>
        <div>
          {" "}
          {isEditing ? (
            <input
            className="border-b-hover rounded-lg border-2 py-2 px-3 w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            address
          )}
        </div>
      </p>
      <p>
        <strong className="text-hover">Location</strong>
        <div>
          {" "}
          {isEditing ? (
            <input
            className="border-b-hover rounded-lg border-2 py-2 px-3 w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          ) : (
            location
          )}
        </div>
      </p>
      <p>
        <strong className="text-hover">Mobile</strong>
        <div className="">
          {" "}
          {isEditing ? (
            <input 
            className="border-b-hover rounded-lg border-2 py-2 px-3 w-full" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          ) : (
            mobile
          )}
        </div>
      </p>
      <p>
        <strong className="text-hover">Email</strong>
        <div>
          {" "}
          {isEditing ? (
            <input className="border-b-hover rounded-lg border-2 py-2 px-3 w-full" value={mailID} onChange={(e) => setMailID(e.target.value)} />
          ) : (
            mailID
          )}
        </div>
      </p>
      <p>
        <strong className="text-hover">Interested Place to Visit</strong>
        <div>
          {" "}
          {isEditing ? (
            <input className="border-b-hover rounded-lg border-2 py-2 px-3 w-full"
              value={interestedPlace}
              onChange={(e) => setInterestedPlace(e.target.value)}
            />
          ) : (
            interestedPlace
          )}
        </div>
      </p>

      {isEditing ? (
        <button className="py-2 px-3 w-full bg-hover hover:bg-yellow-400 text-slate-900 rounded-md" onClick={handleSaveClick}>Save</button>
      ) : (
        <button className="py-2 px-3 w-full border-hover border-2 hover:bg-yellow-200 text-slate-900 rounded-md" onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default ProfileDetails;
