import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/store'
import { fetchTopStoriesAsync } from '../features/news/newsSlice'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const stories = useAppSelector(state => state.news.stories);
  const storiesStatus = useAppSelector(state=> state.news.status);

  const storiesCount = 10;

  useEffect(() => {
    if (storiesStatus == 'idle') {
      dispatch(fetchTopStoriesAsync(storiesCount));
    }
  }, [dispatch, storiesStatus])

  return (
    <div className={styles.container}>
        {storiesStatus != 'succeeded' && <p>fetching...</p>}
      <ul>
        {storiesStatus == 'succeeded' && stories.map(story => (<li key={story.id}>{story.title}</li>))}
      </ul>
    </div>
  )
}

export default Home
