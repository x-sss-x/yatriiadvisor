"use client";
import { useParams, useRouter } from "next/navigation";
import { useAppSelector } from "../../../../../../store";
import { PlacesData, PlacesSelector } from "../../../../../../store/places";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LikeButton } from "@/components/Destination/Destination";

export default function ViewDestPage() {
  const destid = useParams().destId;
  const destination = useAppSelector((state) =>
    PlacesSelector.selectById(state, destid)
  );
  const router = useRouter();

  return (
    <div className="p-10 flex justify-center py-32">
      <div className="bg-white shadow-sm w-5/6 rounded-sm">
        <div className="flex items-center gap-3 py-7 px-5 border-b border-gray-300">
          <AiOutlineArrowLeft
            onClick={() => router.back()}
            className="text-xl hover:cursor-pointer"
          />
          <h1 className="text-2xl font-semibold">{destination?.name}</h1>
        </div>
        <div>
          <iframe
            src={destination?.map}
            className="w-full h-[400px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <div className="flex px-5 py-6 justify-between items-center">
            <p className="text-md mb-2 w-3/4">{destination?.desc}</p>
            <LikeButton dest={destination as (typeof PlacesData)[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
