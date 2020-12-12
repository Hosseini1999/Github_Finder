// *  create class github
class Git {
  constructor() {
    this.client = "a4d2301fc36a18496305";
    this.client_secret = "e3292378996e5bc11a83a1a139d7b7c2e68bfd80";
    this.count = 5;
    this.sort = "create:asc";
  }
  async getUser(user) {
    // GET API User
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client}&client_secret=${this.client_secret}`
    );
    // GET API repos
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.count}&sort=${this.sort}&client_id=${this.client}&client_secret=${this.client_secret}`
    );
    // Response Api User
    const profile = await profileResponse.json();
    // Response Api repos
    const repos = await reposResponse.json();
    return {
      profile,
      repos,
    };
  }
}
