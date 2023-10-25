import axios from "axios";

export default class RealServer {
  constructor() {
    this.httpClient = axios.create({
        baseURL: 'http://localhost:53363',      
    });
  }

async search(keyword) {
    return this.#BBS010(keyword)
}
// SearchBBS010List(string title, string inUserName, string contents)
  async #BBS010(keyword) {
    return this.httpClient
      .get("SearchBBS010List", {
        params: {
            title: "",
            inUserName: "",
            contents: "",         
        },
      })
      .then (res => {console.log(res)})
    //   .then(res => res.data.items)
    //   .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
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