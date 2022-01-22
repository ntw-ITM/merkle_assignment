export type itemDTO = {
  id: number;
  deleted: boolean;
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  by: string;
  time: number;
  text: string;
  dead: boolean;
  parent: number;
  poll: number;
  kids: number[];
  url: string;
  score: number;
  title: string;
  parts: number[];
  descendants: number;
};

export type userDTO = {
  id: string;
  created: number;
  karma: number;
  about: string;
  submitted: number[];
};

const baseUrl = "https://hacker-news.firebaseio.com/v0";

export async function fetchTopStories(): Promise<number[]> {
  const response = await fetch(baseUrl + "/topstories.json", {
    method: "GET"
  });
  const result = await response.json();
  return result;
}

export async function fetchItem(id: number): Promise<itemDTO> {
  const response = await fetch(baseUrl + `/item/${id}.json`, {
    method: "GET"
  });
  const result = await response.json();
  return result;
}

export async function fetchUser(id: string): Promise<userDTO> {
  const response = await fetch(baseUrl + `/user/${id}.json`, {
    method: "GET"
  });
  const result = await response.json();
  return result;
}
