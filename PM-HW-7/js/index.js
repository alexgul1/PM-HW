((document) => {

  /* MAIN PART OF PROGRAM */

  const root = document.querySelector('#root');
  const menu = document.querySelector("#menu");
  let isMenuVisible = false;
  let activeTarget = null;

  const renderFileList = () => {
    fileList.forEach(file => {
      const div = document.createElement('div');
      div.draggable = true;
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
    if (!isShow) activeTarget = null;
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
    activeTarget = event.target;

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
    if (typeof action === "function" && activeTarget) {
      action();
    }
  };

  const createFile = () => {
    const fileName = prompt("Enter filename");

    if(fileName === null) return;
    if (fileName.trim()) {
      const div = document.createElement('div');
      div.dataset.structure = "file";
      div.draggable = true
      div.innerText = fileName;
      root.appendChild(div);
    } else {
      alert('Inappropriate filename');
    }
  };

  const deleteFile = () => {
    const isConfirm = confirm(`Are you sure to delete ${activeTarget.innerText}`);
    if (isConfirm) {
      activeTarget.remove();
    }
  };

  const renameFile = () => {
    const newFileName = prompt("Enter new filename", activeTarget.innerText);

    if(newFileName === null) return;
    if (newFileName.trim()) {
      activeTarget.innerText = newFileName.trim();
    } else {
      alert('Inappropriate filename');
    }
  };


  /* Drag'n'Drop */

  const dragStartHandler = (event) => {
    event.target.style.opacity = "0.4";
    activeTarget = event.target;
  }

  const dragOverHandler = (event) => {
    event.preventDefault()

    const currentElem = event.target;
    const isMovable = activeTarget !== currentElem && currentElem.dataset.structure === "file";
    if(!isMovable) {
      return;
    }

    const nextElement = currentElem === activeTarget.nextElementSibling ? currentElem.nextElementSibling : currentElem;
    root.insertBefore(activeTarget, nextElement);
  }

  const dragEndHandler = (event) => {
    event.target.style.opacity = "1";
  }

  /* Listeners */

  document.addEventListener('DOMContentLoaded', renderFileList);
  document.addEventListener('contextmenu', contextMenuHandler);
  document.addEventListener('click', contextMenuAction);
  document.addEventListener('click', () => {
    if (isMenuVisible) toggleMenu(false);
  });

  document.addEventListener('dragstart', dragStartHandler);
  document.addEventListener('dragover', dragOverHandler);
  document.addEventListener("dragend", dragEndHandler)
})(window.document);