import { useState, useEffect, createContext, useContext } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  collectionGroup,
  query,
} from "@firebase/firestore";
import { AuthContext } from "./AuthProvider";

export const DataContext = createContext();

export const DataProvider = function (props) {
  const [cities, setCities] = useState([]);
  // const { user } = useContext(AuthContext);
  const db = getFirestore();

  useEffect(() => {
    async function getCities() {
      const citiesRef = collection(db,"cities");
      const citiesSnapshot = await getDocs(citiesRef);
      const loadedCities = [];
      citiesSnapshot.forEach((doc) => {
        loadedCities.push({ id: doc.id, ...doc.data() });
      });
      setCities(loadedCities);
    }
    getCities();
  }, [db, cities ]);

  async function getCity(cityId) {
    const cityRef = doc(db,  "cities", cityId);
    const cityDoc = await getDoc(cityRef);
    if (!cityDoc.exists()) {
      // Throw an error, so that the catch is triggered in WeatherSingle
      throw new Error("City not found");
    }
    return cityDoc.data();
  }

  async function addCity(newCity) {
    const citiesRef = collection(db, "cities");
    const docRef = await addDoc(citiesRef, {name: newCity});
    newCity.id = docRef.id;
    setCities([...cities, newCity]);
    return newCity;
  }

  const value = {
    cities,
    getCity,
    addCity,
  };

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  );
};
