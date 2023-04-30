class Api {
  METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE"
  };

  async get(url, data, config) {
    return await this.request(this.METHOD.GET, url, data, config);
  }

  async request(method, url, data, config) {
    if (!method || !url) throw new Error("Invalid Api request: method and url are required.");
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
          ...config?.headers
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      console.error("api.request", {method, url, message: error.message});
      throw error;
    }
  }
}

export default Api;