import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'


const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);
  return (
    <>
      <NewsCard />
    </>
  )
}

export default NewsIndex
