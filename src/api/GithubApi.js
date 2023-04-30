import Api from "./Api";
import qs from "qs";

class GithubApi extends Api {
  constructor() {
    super();
    this.baseUrl = "https://api.github.com";
  }

  async get(url, query, data, config) {
    const options = {
      allowDots: true,
      skipNulls: true
    };
    const params = qs.stringify(query, options);
    const githubUrl = `${this.baseUrl}/${url}?${params}`;
    return super.get(githubUrl, data, config);
  }
}

export default new GithubApi();