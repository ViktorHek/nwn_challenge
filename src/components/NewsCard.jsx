import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = (article) => {
  return (
    <Card
      data-cy="news-card"
      image={article.urlToImage}
      header={article.title}
      meta={`By: ${article.author} at ${article.source}`}
      description={article.description}
      extra={<Header as='h6'>{`Published at ${article.publishedAt}`}</Header>}
    />
  )
}

export default NewsCard
