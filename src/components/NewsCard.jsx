import React from "react";
import { Header, Card } from "semantic-ui-react";

const NewsCard = (articles) => {
	return (
		<Card
			data-cy="news-index"
			image={articles.urlToImage}
			header={articles.header}
			meta={`By: ${articles.author} at ${articles.name}`}
			description={articles.description}
			extra={<Header as="h6">`Published at ${articles.publishedAt}`</Header>}
		/>
	);
};

export default NewsCard;
