import axios from "axios";

const NewsService = {
  async index() {
    let response = await axios.get(
      "/top-headlines?country=us&apiKey=6340032834b34762a08575d2d96e7f38"
    );
    return response.data.articles;
  },

  // async search(query) {},
};

export default NewsService;
