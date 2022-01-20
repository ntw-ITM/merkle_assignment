import Image from 'next/image';
import { FC, useState, useCallback, useEffect, useContext } from 'react';
import { Story } from './types/story';

interface Props {
    story: Story
    index: number;
};

const StoryCard: FC<Props> = ({story, index}) => {
  return (
    // <div className="card">
    //     <div className="image-data">
    //         <div className="background-image"></div>
    //         <div className="publication-details">
    //             <a href="#" className="author"><i className="fas fa-user"></i>Julio Codes</a>
    //             <span className="date"><i className="fas fa-calendar-alt"></i>March 30, 2020</span>
    //         </div>
    //     </div>
    //     <div className="post-data">
    //         <h1 className="title">{story.title}</h1>
    //         <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ut dignissimos provident molestias veniam temporibus delectus debitis qui ipsa commodi.</p>
    //         <div className="cta">
    //             <a href="#">Read more</a>
    //         </div>
    //     </div>
    // </div>
    <div className="card">
        {/* <img src="image/banner-1.jpg" alt="" /> */}
        <Image width={100} height={60} src={`/images/stockimg${index + 1}.jpg`} alt="dummy photo"/>
        <div className="content">
            <h3>{story.title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, alias iure fuga pariatur voluptates id ullam odio modi consequuntur repellendus.</p>
        </div>
    </div>
  )
};
export default StoryCard;