import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = (props) => {
  return (
    <Card
      data-cy="news-card"
      image={props.urlToImage}
      header={props.title}
      meta={`By: ${props.author} at ${props.source}`}
      description={props.description}
      extra={<Header as='h6'>{`Published at ${props.publishedAt}`}</Header>}
    />
  )
}

export default NewsCard
