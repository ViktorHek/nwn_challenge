import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsCard from "./NewsCard";
import NewsService from "../modules/NewsService";

const NewsIndex = () => {
  const dispatch = useDispatch();
  const newsFeed = useSelector((state) => state.newsFeed);
  const fetchNewsFeed = async () => {
    let newsFeed = await NewsService.index();
    dispatch({ type: "SET_NEWS_FEED", payload: newsFeed });
  };

  useEffect(fetchNewsFeed, []);

  let articleList 
  articleList = (
    <>
    {newsFeed && newsFeed.map(article => {
      return <NewsCard article={{...article}} />
    })}
    </>
  )
  return (
    <>
      {articleList}
    </>
  );
};

export default NewsIndex;
