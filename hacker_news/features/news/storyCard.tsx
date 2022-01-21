import { FC } from 'react';
import { Story } from './types/story';

interface Props {
    story: Story
    index: number;
};

const StoryCard: FC<Props> = ({story, index}) => {
  return (
    <div className="card">
        <div className="image-data">
            <div className="background-image" style={{background: `url("images/stockimg${index + 1}.jpg") center no-repeat`}}></div>
            <div className="publication-details">
                <a href="#" className="date"><i className="fas fa-user"></i>{story.author.id}</a>
                <span className="date"><i className="fas fa-heart"></i>{`karma: ${story.author.karma}`}</span>
                <span className="date"><i className="fas fa-star"></i>{`score: ${story.score}`}</span>
                <span className="date"><i className="fas fa-calendar-alt"></i>{`${new Date(story.timestamp * 1000).toLocaleString('en-GB', {month: 'numeric', day: 'numeric', year: '2-digit'})}`}</span>
            </div>
        </div>
        <div className="post-data">
            <a href={story.url} target="_blank" rel="noreferrer"><h1 className="title">{story.title}</h1></a>
            <h2 className="subtitle">An exiting news story</h2>
            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ut dignissimos provident molestias veniam temporibus delectus debitis qui ipsa commodi.</p>
            <div className="cta">
                <a href={story.url} target="_blank" rel="noreferrer">Read more</a>
            </div>
        </div>
    </div>
  )
};
export default StoryCard;