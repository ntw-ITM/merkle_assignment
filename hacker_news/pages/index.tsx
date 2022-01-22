import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/store'
import Header from '../components/layout/header'
import { fetchRandomTopStoriesAsync } from '../features/news/newsSlice'
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
      dispatch(fetchRandomTopStoriesAsync(storiesCount));
    }
  }, [dispatch, storiesStatus])

  return (
    <>
    <Header /> 
    <div className="container">
      <section className="card-container">
        {storiesStatus == 'loading' && [...Array(storiesCount)].map((i) => <StoryCard loading={true} key={i} index={i}/>)}
        {storiesStatus == 'succeeded' && [...stories].sort((a, b) => a.score - b.score).map((story, i) => <StoryCard story={story} key={story.id} index={i}/>)}
      </section>
    </div>
    </>
  )
}

export default Home
