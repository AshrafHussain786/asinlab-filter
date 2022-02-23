import { useState } from "react";
import Emojis from "../../assets/data/emojis.json";
import { SearchBar } from "../../components";
import "./css/index.css";

function HomePage() {
  const [data, setData] = useState([]);

  function Search(el) {
    if (el !== "" && el !== null) {
      const criteriaEl = document.getElementById("criteria").value;
      console.log("criteriaEl :", criteriaEl);

      if (criteriaEl === "description" || criteriaEl === "category") {
        const filtered = Emojis.filter(
          (res) => res[criteriaEl].toLowerCase().indexOf(el.toLowerCase()) >= 0
        );
        console.log("filtered :", filtered);
        setData(filtered);
      } else {        
        for (let i = 0; i < Emojis.length; i++) {          
          let filtered2 = Emojis.filter(
            (res) => res[i].criteriaEl.toLowerCase().indexOf(el.toLowerCase()) >= 0
          );
          console.log("filtered2 :", filtered2);
          setData(filtered2);
        }
      }
    }
  }

  return (
    <div className="main_div">
      <div className="selection_div">
        <span>
          <b>Please select the criteria :</b>
        </span>{" "}
        <span>
          <select id="criteria">
            <option value="description" selected>Description</option>
            <option value="category">Category</option>
            {/* <option value="aliases">Aliases</option>
            <option value="tags">Tags</option> */}
          </select>
        </span>
      </div>
      <br />
      <SearchBar setSearch={Search} />
      <div className="content_div">
        {data.map((v, i) => {
          return (
            <span className="emoji" key={i}>
              {v.emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default HomePage;
