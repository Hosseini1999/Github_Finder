// *  create class github
class Git {
  constructor() {
    this.client = "a4d2301fc36a18496305";
    this.client_secret = "e3292378996e5bc11a83a1a139d7b7c2e68bfd80";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
