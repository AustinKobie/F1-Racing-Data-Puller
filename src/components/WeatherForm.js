import { useState, useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

export default function WeatherForm() {
  const [city, setCity] = useState("");
  const { addCity } = useContext(DataContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!city) {
      // City name is empty, do nothing
      return;
    }
    try {
      console.log(city)
      await addCity(city);
      setCity("");
    } catch (error) {
      console.error("Error adding city:", error);
      
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="city"
          id="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button className="add-city-btn">Add City</button>
      </div>
    </form>
  );
}

