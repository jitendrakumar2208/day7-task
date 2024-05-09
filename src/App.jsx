import { useState } from "react";
import "./App.css";
import Navbar from "./comonents/Navbar/Navbar";
import Card from "./comonents/cards/Card";
import Data from "./data/Data";
function App() {
  const [searchtext, setSearchText] = useState("");

  const list = Data.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchtext.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="input_section">
        <input
          type="text"
          value={searchtext}
          placeholder="Search Restaurents"
          className="search_box"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div>
          <span>Minimum Rating:</span>
          <input type="number" className="input_rating" />
        </div>
      </div>

      <div className="data_container">
        {list.map((ele) => {
          return (
            <Card
              key={ele._id.$oid}
              name={ele.name}
              address={ele.address}
              rating={ele.rating}
              outcode={ele.outcode}
              postcode={ele.postcode}
              type_of_food={ele.type_of_food}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
