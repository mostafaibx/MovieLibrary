import classes from "./Search.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../../Store/SearchAction";

function Search() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  function inputHandler(event) {
    setSearchText(event.target.value);
  }

  function searchHandler(event) {
    event.preventDefault();
    console.log("called");
    dispatch(searchMovies(searchText));
    setSearchText("");
  }

  return (
    <div className={classes["search-bar"]}>
      <form onSubmit={searchHandler}>
        <input
          onChange={inputHandler}
          type="text"
          className={classes["search-input"]}
          placeholder="Search..."
        />
        <button className={classes["search-button"]}>Search</button>
      </form>
    </div>
  );
}

export default Search;
