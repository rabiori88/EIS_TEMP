import axios from "axios";

export default class LocalServer {
  constructor() {
    console.log("fakeYoutube");
  }

async search(keyword) {
    return this.#BBS010(keyword)
}
// SearchBBS010List(string title, string inUserName, string contents)
  async #BBS010(keyword) {
    console.log("Local BBS010");
    return axios
      .get(`/../../data.js`)
      .then(res => {console.log(res)})
      // .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }

  async #mostTrend() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then(res => res.data.items);
  }
}