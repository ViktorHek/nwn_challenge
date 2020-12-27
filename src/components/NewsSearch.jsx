import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input, Button } from "semantic-ui-react";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const [performSearch, setPerformSearch] = useState("");
	const specificNews = useSelector((state) => state.specificNews);
  const fetchArticles = async () => {
    let specificNews = await NewsService.search(performSearch);
    debugger
    dispatch({ type: "SEARCH_NEWS", payload: specificNews });
  };

  useEffect(fetchArticles, []);

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
        onClick={fetchArticles}
      />
    </>
  );
};

export default NewsSearch;
