import { FC } from "react";

import { Story } from "./types/story";

interface Props {
  story?: Story;
  index: number;
  loading?: boolean;
}

const StoryCard: FC<Props> = ({ story, index, loading }) => (
  <>
    {loading && (
      <div className="card">
        <div className="card-image">
          <div className="background-image skeleton" />
        </div>
        <div className="card-data">
          <h1 className="title skeleton skeleton-header">
            <br />
          </h1>
          <p className="skeleton skeleton-text">
            <br />
          </p>
          <p className="skeleton skeleton-text">
            <br />
          </p>
          <p className="skeleton skeleton-text">
            <br />
          </p>
          <p className="skeleton skeleton-text">
            <br />
          </p>
        </div>
      </div>
    )}
    {!loading && story && (
      <div className="card">
        <div className="card-image">
          <div
            className="background-image"
            style={{ background: `url("images/stockimg${index + 1}.jpg") center no-repeat` }}
          />
          <div className="card-details">
            <a href="#" className="card-detail">
              <i className="fas fa-user" />
              {story.author.id}
            </a>
            <span className="card-detail">
              <i className="fas fa-heart" />
              {`karma: ${story.author.karma}`}
            </span>
            <span className="card-detail">
              <i className="fas fa-star" />
              {`score: ${story.score}`}
            </span>
            <span className="card-detail">
              <i className="fas fa-calendar-alt" />
              {`${new Date(story.timestamp * 1000).toLocaleString("en-GB", {
                month: "numeric",
                day: "numeric",
                year: "2-digit"
              })}`}
            </span>
          </div>
        </div>
        <div className="card-data">
          <a href={story.url ?? "#"} target="_blank" rel="noreferrer">
            <h1 className="title">{story.title}</h1>
          </a>
          <h2 className="subtitle">An exiting news story</h2>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ut dignissimos provident
            molestias veniam temporibus delectus debitis qui ipsa commodi.
          </p>
          <div className="cta">
            <a href={story.url ?? "#"} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        </div>
      </div>
    )}
  </>
);
export default StoryCard;
