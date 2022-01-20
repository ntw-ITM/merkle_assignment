import { FC, useState, useCallback, useEffect, useContext } from 'react';
import { Story } from './types/story';

interface Props {
    story: Story
};

const StoryCard: FC<Props> = ({story}) => {
  return (
    <div className="card">
        <div className="image-data">
            <div className="background-image"></div>
            <div className="publication-details">
                <a href="#" className="author"><i className="fas fa-user"></i>Julio Codes</a>
                <span className="date"><i className="fas fa-calendar-alt"></i>March 30, 2020</span>
            </div>
        </div>
        <div className="post-data">
            <h1 className="title">{story.title}</h1>
            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ut dignissimos provident molestias veniam temporibus delectus debitis qui ipsa commodi.</p>
            <div className="cta">
                <a href="#">Read more</a>
            </div>
        </div>
    </div>
  )
};
export default StoryCard;