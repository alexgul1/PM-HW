((document) => {
  const root = document.querySelector('#root');
  const menu = document.querySelector("#menu");
  let isMenuVisible = false;
  let currentTarget = null;

  const renderFileList = () => {
    fileList.forEach(file => {
      const div = document.createElement('div');
      div.dataset.structure = "file";
      div.innerText = file;
      root.appendChild(div);
    })
  };

  const fillContextMenu = (target) => {
    if (target.dataset.structure === "root") {
      menu.innerHTML = "<div class='menu-option' data-action='create'>Create</div>"
    } else {
      menu.innerHTML = "<div class='menu-option' data-action='rename'>Rename</div>" +
        "<div class='menu-option' data-action='delete'>Delete</div>"
    }
  };

  const toggleMenu = (isShow) => {
    menu.style.display = isShow ? "block" : "none";
    if (!isShow) currentTarget = null;
  };

  const setPositionMenu = (origin) => {
    menu.style.left = `${origin.left}px`;
    menu.style.top = `${origin.top}px`;
    isMenuVisible = true;
    toggleMenu(true);
  };

  const contextMenuHandler = (event) => {
    if (!event.target.dataset.structure) {
      return;
    }

    event.preventDefault();
    currentTarget = event.target;

    const origin = {
      left: event.pageX,
      top: event.pageY
    };
    fillContextMenu(event.target);
    setPositionMenu(origin);

    console.log(event.target)
  };

  const contextMenuAction = (event) => {
    if (!event.target.dataset.action) {
      return;
    }

    const actionsMap = {
      create: createFile,
      delete: deleteFile,
      rename: renameFile
    };

    const action = actionsMap[event.target.dataset.action];
    if (typeof action === "function" && currentTarget) {
      action();
    }
  };

  const createFile = () => {
    const fileName = prompt("Enter filename");

    if(fileName === null) return;
    if (fileName.trim()) {
      const div = document.createElement('div');
      div.dataset.structure = "file";
      div.innerText = fileName;
      root.appendChild(div);
    } else {
      alert('Inappropriate filename');
    }
  };

  const deleteFile = () => {
    const isConfirm = confirm(`Are you sure to delete ${currentTarget.innerText}`);
    if (isConfirm) {
      currentTarget.remove();
    }
  };

  const renameFile = () => {
    const newFileName = prompt("Enter new filename", currentTarget.innerText);

    if(newFileName === null) return;
    if (newFileName.trim()) {
      currentTarget.innerText = newFileName.trim();
    } else {
      alert('Inappropriate filename');
    }
  };

  document.addEventListener('DOMContentLoaded', renderFileList);
  document.addEventListener('contextmenu', contextMenuHandler);
  document.addEventListener('click', contextMenuAction);
  document.addEventListener('click', () => {
    if (isMenuVisible) toggleMenu(false);
  });
})(window.document);