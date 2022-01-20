import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/store'
import { fetchTopStoriesAsync } from '../features/news/newsSlice'
import StoryCard from '../features/news/storyCard'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const stories = useAppSelector(state => state.news.stories);
  const storiesStatus = useAppSelector(state=> state.news.status);
  const storiesError = useAppSelector(state=> state.news.error);

  const storiesCount = 10;

  useEffect(() => {
    if (storiesStatus == 'idle') {
      dispatch(fetchTopStoriesAsync(storiesCount));
    }
  }, [dispatch, storiesStatus])

  useEffect(() => {
    console.log(stories);
    console.log(storiesStatus);
    console.log(storiesError);
  }, [stories, storiesStatus, storiesError])

  return (
    <div>
      {storiesStatus != 'succeeded' && <p>fetching...</p>}
       {/* {storiesStatus == 'succeeded' && stories.map(story => <StoryCard story={story} key={story.id} />)} */}
    </div>
  )
}

export default Home
