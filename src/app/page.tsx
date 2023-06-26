"use client";
import React from "react";
import "../styles/globals.css";
import { FaHeart, FaReadme, FaStar, FaUserAlt, FaUsers } from "react-icons/fa";
import NAV_Button from "@/components/Navigate_button";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useAppDispatch } from "../../store/hooks";
import { PlacesData, PlacesSelector, setAllPlaces } from "../../store/places";
import { DestCard } from "@/components/Destination/Destination";
import { useAppSelector } from "../../store";

const Home = () => {
  const dispatch = useAppDispatch();

  dispatch(setAllPlaces(PlacesData));

  const destination = [
    {
      id: "4136cd0b-d90b-4af7-b485-5d1ded8db252",
      name: "Goa",
      desc: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
      image: "/goa.jpg",
      state: "Goa",
      season: "SUMMER",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1980421.213564425!2d74.55193273133746!3d14.194181913490366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bae145bdc82218d%3A0x5762c17ebe202232!2sRJS%20PU%20College%2C%20N%200%2001%2C%20Mahakavi%20Vemana%20Rd%2C%20Koramangala%203%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560034!3m2!1d12.9290372!2d77.6240164!4m5!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!3m2!1d15.2993265!2d74.12399599999999!5e0!3m2!1sen!2sin!4v1687747930354!5m2!1sen!2sin",
    },
    {
      id: "413623d0b-d90b-4af8-b489-5d1dedudb252",
      name: "Hampi",
      desc: "Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.",
      image: "/Hampi.jpg",
      state: "Karnataka",
      season: "Winter",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1980971.8263713568!2d75.75183170249075!3d14.131063445897752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bae145bdc82218d%3A0x5762c17ebe202232!2sRJS%20PU%20College%2C%20N%200%2001%2C%20Mahakavi%20Vemana%20Rd%2C%20Koramangala%203%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560034!3m2!1d12.9290372!2d77.6240164!4m5!1s0x3bb77fd95d4be823%3A0x6e52e05076df36b8!2sHampi%2C%20Karnataka!3m2!1d15.335013199999999!2d76.46002399999999!5e0!3m2!1sen!2sin!4v1687748544004!5m2!1sen!2sin",
    },
    {
      id: "423613d0b-d90b-4af8-b489-7d1dedudb252",
      name: "Kochi",
      desc: "Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, when a flood carved out its harbor and opened it to Arab, Chinese and European merchants. Sites reflecting those influences include Fort Kochi, a settlement with tiled colonial bungalows and diverse houses of worship. Cantilevered Chinese fishing nets, typical of Kochi, have been in use for centuries.",
      image: "/Kochi.jpg",
      state: "Kerala",
      season: "SUMMER",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2002284.7423406304!2d75.92247062276992!3d11.428409210465441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bae145bdc82218d%3A0x5762c17ebe202232!2sRJS%20PU%20College%2C%20N%200%2001%2C%20Mahakavi%20Vemana%20Rd%2C%20Koramangala%203%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560034!3m2!1d12.9290372!2d77.6240164!4m5!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!3m2!1d9.9312328!2d76.26730409999999!5e0!3m2!1sen!2sin!4v1687748648945!5m2!1sen!2sin",
    },
  ];
  return (
    <div>
      <div className=" sticky bg-[url('/homepageImage.jpg')] bg-cover bg-no-repeat text-black h-[600px] pl-10 py-64 ">
        <div className="text-3xl w-[442px] text-button">
          Never Stop Explorint The World!
        </div>
        <div className="py-4 rounded-sm flex text-3xl space-x-4 cursor-pointer items-center text-button">
          <button className="font-bold">Get Started</button>
        </div>
      </div>
      <hr />
      <div className="pt-8 pl-8">
        <div className="text-button font-roboto font-bold pt-10 container pl-20 pb-8 text-3xl">
          On Going Trip
        </div>
        <div className="frame bg-white">
          <div className="image-container">
            <img
              src="/placeImage.jpg"
              alt="Place"
              className="place-image w-full"
            />
          </div>
          <div className="details-container">
            <h2 className="place-name">Goa</h2>
            <p className="place-views">Views: 1000</p>
            <div className="review-stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
            </div>
            <div>
              <Link
                target="_blank"
                href="https://www.google.com/maps/dir/RJS+PU+College,+N+0+01,+Mahakavi+Vemana+Rd,+Koramangala+3+Block,+Koramangala,+Bengaluru,+Karnataka+560034/Goa/@14.18468,73.6267065,7z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3bae145bdc82218d:0x5762c17ebe202232!2m2!1d77.6240164!2d12.9290372!1m5!1m1!1s0x3bbfba106336b741:0xeaf887ff62f34092!2m2!1d74.123996!2d15.2993265!3e0?entry=ttu"
              >
                <NAV_Button />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" pb-2">
        <div className="text-button font-roboto font-bold pt-10 container pl-20 pb-8 text-3xl">
          Top Destinations
        </div>
        <ul className="grid grid-cols-3 gap-4 p-10">
          {destination.slice(0, 3).map((destination) => (
            <DestCard key={destination.id} destination={destination} />
          ))}
        </ul>
      </div>
      <div>
        <div className="text-button font-roboto font-bold pt-2 container pl-20 pb-4 top-20  text-3xl">
          How It Works ?
        </div>
        <div className="flex">
          <div className="w-1/4 p-4">
            <div className="border border-button text-button bg-white p-4">
              <h2 className="text-lg font-bold">
                <FaReadme />
              </h2>
              <p>Register on our Website</p>
            </div>
          </div>
          <div className="w-1/4 p-4">
            <div className="border border-button text-button bg-white p-4">
              <h2 className="text-lg font-bold">
                <FaUserAlt />
              </h2>
              <p>Add Information About Yourself</p>
            </div>
          </div>
          <div className="w-1/4 p-4">
            <div className="border border-button text-button bg-white p-4">
              <h2 className="text-lg font-bold">
                <FaUsers />
              </h2>
              <p>Analyze the List Of People</p>
            </div>
          </div>
          <div className="w-1/4 p-4">
            <div className="border border-button text-button bg-white p-4">
              <h2 className="text-lg font-bold ">
                <FaHeart />
              </h2>
              <p>Find Your Favourite Places</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
