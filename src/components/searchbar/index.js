import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./css/index.css";

function SearchBar({ setSearch }) {
  const [value, setValue] = useState("");
  
  function Enter(event) {
    if (event.charCode === 13) {
      setSearch(value);
    }
  }
  
  return (
    <div className="searchbar">
      <input
        type={"search"}
        onKeyPress={(event) => Enter(event)}
        onChange={(e) => setValue(e.target.value)}
        className="input"
      />
      <div className="icon_div" onClick={() => setSearch(value)}>
        <AiOutlineSearch className="icon" />
      </div>
    </div>
  );
}
export default SearchBar;
