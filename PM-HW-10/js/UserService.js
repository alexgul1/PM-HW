class UserService {
  static async getUser(username) {
    return HttpService.request({
      path: `/users/${username}`
    });
  }

  static async getUserRepos(user) {
    return HttpService.request({
      path: user.reposPath,
      params: {
        sort: "pushed",
        per_page: User.reposPerPage,
        page: user.currentReposPage,
      }
    })
  }

  static async getUserFollows(user) {
    return HttpService.request({
      path: user.followsPath,
      params: {
        per_page: User.followsPerPage,
        page: user.currentFollowsPage,
      }
    })
  }
}