import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input, Button } from "semantic-ui-react";
import NewsCard from "./NewsCard";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState([]);
  const specificNews = useSelector((state) => state.searchArticle);
  const fetchArticles = async () => {
    let specificNews = await NewsService.search(inputValue);
    debugger;
    dispatch({ type: "SEARCH_NEWS", payload: specificNews });
  };

  useEffect(fetchArticles, []);

  // let searchResult = specificNews.map((article) => {
  //   return <NewsCard article={article} />;
  // });

  return (
    <>
      <Input
        placeholder="Search..."
        data-cy="search_input"
        onChange={(event) => setInputValue(event.target.value)}
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
