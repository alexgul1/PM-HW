const tabsToggle = function (event) {
  if(!event.target.dataset.tab) {
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

window.addEventListener('click', tabsToggle)