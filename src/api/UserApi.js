import GithubApi from "./GithubApi";
import { format, sub } from "date-fns";

class UserApi {
  constructor() {
    this.api = GithubApi;
    this.lastMonth = format(sub(new Date(), { months: 1 }), 'yyyy-MM-dd');
  }

  async findAll(query) {
    const queryDefault = {
      per_page: 3,
      ...query
    };
    const users = await this.api.get("search/users", queryDefault);
    return this.findAllData(users);
  }

  async findAllByFollowers() {
    const query = {
      q: `created:>${this.lastMonth}`,
      sort: "followers",
      order: "desc"
    };
    return await this.findAll(query);
  }

  async findAllByRepositories() {
    const query = {
      q: `created:>${this.lastMonth}`,
      sort: "repositories",
      order: "desc"
    };
    return await this.findAll(query);
  }

  findAllData(users) {
    let response = [];
    users.items.map(async u => {
      const data = await this.api.get(`users/${u.login}`);
      response.push(data);
    });
    return response;
  }
}

export default UserApi;