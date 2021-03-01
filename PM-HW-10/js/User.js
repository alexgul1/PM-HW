class User {

  static reposPerPage = 15;
  static followsPerPage = 25;

  constructor(data) {
    this.login = data.login;
    this.name = data.name;
    this.url = data.html_url;
    this.avatarUrl = data.avatar_url;
    this.reposCount = data.public_repos;
    this.followersCount = data.followers;
    this.currentReposPage = 1;
    this.currentFollowsPage = 1;
    this.reposPath = (new URL(data.repos_url)).pathname;
    this.followsPath = (new URL(data.followers_url)).pathname;
  }
}