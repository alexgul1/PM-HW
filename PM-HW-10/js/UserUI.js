class UserUI {
  constructor() {
    this.userBlock = document.querySelector('.user');
    this.noUserBlock = document.querySelector('.no-user');
    this.userInfoBlock = document.querySelector('.user-info');
    this.tabsMenuBlock = document.querySelector('.tabs-menu');
    this.reposList = document.querySelector('.user-repos');
    this.followsList = document.querySelector('.user-follows');
    this.username = document.querySelector("#search-box");
    this.searchButton = document.querySelector("#search");
    this.lastSearchedValue = null;

    this.getUser = this.getUser.bind(this);
    this.registerListeners();
  }

  getUser() {
    if (!this.username.value.trim() || this.lastSearchedValue === this.username.value.trim()) {
      return;
    }

    this.lastSearchedValue = this.username.value.trim();

    if ((user && user.login === this.lastSearchedValue)) {
      return;
    }

    UserService.getUser(this.lastSearchedValue)
      .then(data => {
        if (data.message) {
          throw new Error("User not found");
        }
        user = new User(data);
        this.getUserRepos(user);
        this.getUserFollows(user);
        this.renderUserInfo(user);

      }).catch(() => {
      user = null;
      this.renderNotFoundUser(this.lastSearchedValue);
    });
  }

  getUserRepos(user) {
    UserService.getUserRepos(user)
      .then((data) => {
        this.updateTabInfo("Repositories", user.reposCount, "repos", "img/book.svg");
        this.renderRepos(data)
      });
  }

  getUserFollows(user) {
    UserService.getUserFollows(user)
      .then((data) => {
        this.updateTabInfo("Followers", user.followersCount, "follows", "img/people.svg");
        this.renderFollows(data)
      });
  }

  renderUserInfo(data) {
    this.noUserBlock.innerHTML = '';

    this.noUserBlock.classList.add('hide');
    this.userBlock.classList.remove('hide');

    const userFullName = data.name ? `<a href="${data.url}" target="_blank"><h3 class="name">${data.name}</h3></a>` : "";

    this.userInfoBlock.innerHTML = `<a href="${data.url}" target="_blank">
                                      <img class="user-avatar" src="${data.avatarUrl}" alt="${data.login}">
                                    </a>
                                    <div class="user-names">
                                      ${userFullName}
                                      <a href="${data.url}" target="_blank">
                                        <span class="user-login">${data.login}</span>
                                      </a>
                                    </div>`;
  }

  renderNotFoundUser(name) {
    this.noUserBlock.innerHTML = `User ${name} not found`;

    this.noUserBlock.classList.remove('hide');
    this.userBlock.classList.add('hide');
  }

  updateTabInfo(name, count, id, imgSrc) {
    const tab = this.tabsMenuBlock.querySelector(`[data-tab=${id}]`);

    tab.innerHTML = `<img class="icon" src="${imgSrc}" alt="${name}"> ${name}
                  <span class="count">${count}</span>`;
  }

  renderRepos(data) {
    this.reposList.innerHTML = data.reduce((accum, item) => accum + this.renderOneRepos(item), "")
    this.renderPagePagination(user.reposCount, User.reposPerPage, user.currentReposPage, this.reposList);
  }

  renderOneRepos(data) {
    const reposDescription = data["description"] ? `<p class="repos-description">${data["description"]}</p>` : "";

    return `<div class="repos-item">
            <h3><a href="${data[`html_url`]}" target="_blank">${data['name']}</a></h3>
            ${reposDescription}
            <p class="repos-short-info">${this.renderReposShortInfo(data)}</p>
          </div>`
  }

  renderReposShortInfo(data) {
    const dateOptions = {year: "numeric", month: "short", day: "numeric"};

    let reposShortInfo = "";

    const date = (new Date(data["pushed_at"])).toLocaleString("en-GB", dateOptions);

    if (data["language"]) {
      reposShortInfo += `<span class="info">${data["language"]}</span>`
    }
    if (data["stargazers_count"]) {
      reposShortInfo += `<span class="info"><img src="img/grade.svg" alt="grade"> ${data["stargazers_count"]}</span>`
    }
    if (data["forks_count"]) {
      reposShortInfo += `<span class="info"><img src="img/share.svg" alt="share"> ${data["forks_count"]}</span>`
    }
    if (data["license"]) {
      reposShortInfo += `<span class="info"><img src="img/local_police.svg" alt="license"> ${data["license"]["name"]}</span>`
    }

    reposShortInfo += `<span class="info">Updated on ${date}</span>`

    return reposShortInfo;
  }

  renderFollows(data) {
    this.followsList.innerHTML = data.reduce((accum, item) => accum + this.renderOneFollow(item), "");
    this.renderPagePagination(user.followersCount, User.followsPerPage, user.currentFollowsPage, this.followsList);
  }

  renderOneFollow(data) {
    return `<div class="follow-item">
            <a href="${data['html_url']}" target="_blank">
              <img class="avatar" src="${data['avatar_url']}" alt="${data['login']}">
            </a>
            <a href="${data['html_url']}" target="_blank">
              <span>${data['login']}</span>
            </a>
          </div>`;
  }

  renderPagePagination(count, perPage, currentPage, block) {
    if (count > perPage) {
      const divElement = document.createElement("div");
      divElement.classList.add("pagination");

      const prevBtn = document.createElement('input');
      prevBtn.type = "button";
      prevBtn.value = "Prev";
      prevBtn.classList.add("button");

      if (currentPage === 1) {
        prevBtn.disabled = true;
      }

      const handler = (event) => {
        this.paginationHandler(event);
      }

      prevBtn.dataset.pagination = block.id;
      prevBtn.dataset.role = 'prev';
      prevBtn.addEventListener('click', handler);

      const nextBtn = document.createElement('input');
      nextBtn.type = "button";
      nextBtn.value = "Next";
      nextBtn.classList.add("button");

      if (currentPage * perPage >= count) {
        nextBtn.disabled = true;
      }

      nextBtn.dataset.pagination = block.id;
      nextBtn.dataset.role = 'next';
      nextBtn.addEventListener('click', handler);


      divElement.appendChild(prevBtn);
      divElement.appendChild(nextBtn);

      block.appendChild(divElement);
    }
  }

  tabsToggle(event) {
    if (!event.target.dataset.tab) {
      return;
    }

    const tabsContent = document.querySelectorAll(".tab-content");
    const tabs = document.querySelectorAll('.tab');
    const currentContent = document.querySelector(`#${event.target.dataset.tab}`);

    tabsContent.forEach(content => content.classList.remove("active"));


    tabs.forEach(tab => tab.classList.remove('active'));

    event.target.classList.add("active");

    currentContent.classList.add("active");
  }

  paginationHandler = function (event) {
    const target = event.target.dataset.pagination;
    const role = event.target.dataset.role;

    switch (target) {
      case "repos": {
        role === "prev" ? user.currentReposPage -= 1 : user.currentReposPage += 1;
        UserService.getUserRepos(user)
          .then((data) => this.renderRepos(data));
        break;
      }
      case "follows": {
        role === "prev" ? user.currentFollowsPage -= 1 : user.currentFollowsPage += 1;
        UserService.getUserFollows(user)
          .then((data) => this.renderFollows(data));
        break;
      }
    }
  }

  enterHandler = function (event) {
    if (event.keyCode === 13) {
      userUI.getUser();
    }
  }

  registerListeners() {
    document.addEventListener('click', this.tabsToggle);
    this.searchButton.addEventListener('click', this.getUser);
    this.username.addEventListener('keydown', this.enterHandler);
    this.username.addEventListener('input', debounce(this.getUser, 1000));
  }
}