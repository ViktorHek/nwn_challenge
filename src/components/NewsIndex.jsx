import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NewsCard from './NewsCard'
import NewsService from "../modules/NewsService"


const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);
  const fetchNews = async () => {
		let articles = await NewsService.index();
		dispatch({ type: "SET_NEWS_FEED", payload: articles });
	};
  return (
    <>
      <NewsCard />
    </>
  )
}

export default NewsIndex
