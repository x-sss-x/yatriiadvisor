import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export const PlacesData = [
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
  {
    id: "423613e0b-d91b-4af8-b4859-7d1deuieudb252",
    name: "Mysuru",
    desc: "Mysore (or Mysuru), a city in India's southwestern Karnataka state, was the capital of the Kingdom of Mysore from 1399 to 1947. In its center is opulent Mysore Palace, seat of the former ruling Wodeyar dynasty. The palace blends Hindu, Islamic, Gothic and Rajput styles. Mysore is also home to the centuries-old Devaraja Market, filled with spices, silk and sandalwood.",
    image: "/Kochi.jpg",
    state: "Karnataka",
    season: "Winter",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d498373.01011174684!2d76.82163275442763!3d12.61259604645367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bae145bdc82218d%3A0x5762c17ebe202232!2sRJS%20PU%20College%2C%20N%200%2001%2C%20Mahakavi%20Vemana%20Rd%2C%20Koramangala%203%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560034!3m2!1d12.9290372!2d77.6240164!4m5!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysore%2C%20Karnataka!3m2!1d12.295810399999999!2d76.6393805!5e0!3m2!1sen!2sin!4v1687748744372!5m2!1sen!2sin",
  },
  {
    id: "423613e1b-d915-4af8-b4859-7d1deuieudb2501",
    name: "Mysuru",
    desc: "Mysore (or Mysuru), a city in India's southwestern Karnataka state, was the capital of the Kingdom of Mysore from 1399 to 1947. In its center is opulent Mysore Palace, seat of the former ruling Wodeyar dynasty. The palace blends Hindu, Islamic, Gothic and Rajput styles. Mysore is also home to the centuries-old Devaraja Market, filled with spices, silk and sandalwood.",
    image: "/Mysuru.jpg",
    state: "Karnataka",
    season: "Winter",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d498373.01011174684!2d76.82163275442763!3d12.61259604645367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bae145bdc82218d%3A0x5762c17ebe202232!2sRJS%20PU%20College%2C%20N%200%2001%2C%20Mahakavi%20Vemana%20Rd%2C%20Koramangala%203%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560034!3m2!1d12.9290372!2d77.6240164!4m5!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysore%2C%20Karnataka!3m2!1d12.295810399999999!2d76.6393805!5e0!3m2!1sen!2sin!4v1687748744372!5m2!1sen!2sin",
  },
  {
    id: "423013e0b-291b-3af8-b4850-8d3deuieudb252",
    name: "Lotus",
    desc: "Religious site also known as the Bahá’í House of Worship, opened in 1986 to those of all religions.",
    image: "/lotus.jpg",
    state: "Uttar Pradesh",
    season: "Winter",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d498373.01011174684!2d76.82163275442763!3d12.61259604645367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bae145bdc82218d%3A0x5762c17ebe202232!2sRJS%20PU%20College%2C%20N%200%2001%2C%20Mahakavi%20Vemana%20Rd%2C%20Koramangala%203%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560034!3m2!1d12.9290372!2d77.6240164!4m5!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysore%2C%20Karnataka!3m2!1d12.295810399999999!2d76.6393805!5e0!3m2!1sen!2sin!4v1687748744372!5m2!1sen!2sin",
  },
];

// <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1980421.213564425!2d74.55193273133746!3d14.194181913490366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3bae145bdc82218d%3A0x5762c17ebe202232!2sRJS%20PU%20College%2C%20N%200%2001%2C%20Mahakavi%20Vemana%20Rd%2C%20Koramangala%203%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka%20560034!3m2!1d12.9290372!2d77.6240164!4m5!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!3m2!1d15.2993265!2d74.12399599999999!5e0!3m2!1sen!2sin!4v1687747930354!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

const PlacesAdapter = createEntityAdapter<(typeof PlacesData)[0]>({
  selectId: (place) => place.id,
});

const FavroitesAdapter = createEntityAdapter<(typeof PlacesData)[0]>({
  selectId: (place) => place.id,
});

export const DestSlice = createSlice({
  name: "dest",
  reducers: {
    setAllPlaces(state, action) {
      PlacesAdapter.setAll(state.places, action.payload);
    },
    addOnePlaceToFav(state, action) {
      FavroitesAdapter.addOne(state.favroitePlaces, action.payload);
    },
    removeOnePlaceToFav(state, action) {
      FavroitesAdapter.removeOne(state.favroitePlaces, action.payload);
    },
  },
  initialState: {
    places: PlacesAdapter.getInitialState(),
    favroitePlaces: FavroitesAdapter.getInitialState(),
  },
});

export const PlacesSelector = PlacesAdapter.getSelectors<RootState>(
  (state) => state.dest.places
);

export const FavroitesSelector = FavroitesAdapter.getSelectors<RootState>(
  (state) => state.dest.favroitePlaces
);

export const {addOnePlaceToFav,removeOnePlaceToFav,setAllPlaces} = DestSlice.actions
