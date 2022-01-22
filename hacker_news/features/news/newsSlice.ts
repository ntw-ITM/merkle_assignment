import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { fetchItem, fetchTopStories, fetchUser } from "./hackernewsAPI";
import { Story } from "./types/story";

export interface NewsState {
  stories: Story[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: NewsState = {
  stories: [],
  status: "idle"
};

//Used to get random top stories
const shuffleArray = (arr: any[]) => {
  let currentIndex = arr.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
};

export const fetchRandomTopStoriesAsync = createAsyncThunk(
  "news/fetchTopStories",
  async (length: number) => {
    const storyItems = shuffleArray(await fetchTopStories()).slice(0, length);
    const stories = await Promise.all(
      storyItems.map(async (id: number): Promise<Story> => {
        const storyItem = await fetchItem(id);
        const authorItem = (await fetchUser(storyItem.by)) ?? { id: "author not found", karma: 0 };
        return {
          id: storyItem.id,
          title: storyItem.title,
          url: storyItem.url,
          timestamp: storyItem.time,
          score: storyItem.score,
          img: "dummy.png",
          author: {
            id: authorItem.id,
            karma: authorItem.karma
          }
        };
      })
    );
    return stories;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRandomTopStoriesAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRandomTopStoriesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stories = action.payload;
      })
      .addCase(fetchRandomTopStoriesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default newsSlice.reducer;
