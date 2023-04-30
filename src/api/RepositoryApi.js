import GithubApi from "./GithubApi";

class RepositoryApi {
  constructor() {
    this.api = GithubApi;
  }

  async findAll(query) {
    const queryDefault = {
      per_page: 4,
      ...query
    };
    const data = await this.api.get("search/repositories", queryDefault);
    return data.items;
  }

  async findAllByStars() {
    const query = {
      q: "stars:>=1",
      sort: "stars",
      order: "desc"
    };
    return await this.findAll(query);
  }
}

export default RepositoryApi;