import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import NewsService from "../modules/NewsService";
import { Input, Button } from "semantic-ui-react";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const [performSearch, setPerformSearch] = useState();

  return (
    <>
      <Input
        placeholder="Search..."
        data-cy="search_input"
        onChange={(event) => setPerformSearch(event.target.value)}
      />
      <Button
        data-cy="search_button"
        type="submit"
        value="Submit"
        onClick={() =>
          dispatch({ type: "SEARCH_NEWS", payload: performSearch })
        }
      />
    </>
  );
};

export default NewsSearch;
