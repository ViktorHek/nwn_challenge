import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input } from "semantic-ui-react";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.specificNews);
  const fetchNews = async () => {
    let articles = await NewsService.search();
    dispatch({ type: "SEARCH_NEWS", payload: articles });
  };

  useEffect(fetchNews, []);

  return (
    <>
      <Input
        action="Search"
        placeholder="Search..."
        data-cy="search_input"
        onChange={(event) => setSearchValue(event)}
        onClick={(event) => performeSearch(event)}
      />
      <div data-cy="search_result">here the search result will go</div>
    </>
  );
};

export default NewsSearch;
