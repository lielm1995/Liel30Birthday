export const openMenu = () => {
  const menuElement = document.querySelector('.rtf');
  if (menuElement && menuElement.classList.contains('closed')) {
    menuElement.classList.remove('closed');
    menuElement.classList.add('open');
  }
};

export const closeMenu = () => {
  const menuElement = document.querySelector('.rtf');
  if (menuElement && menuElement.classList.contains('open')) {
    menuElement.classList.remove('open');
    menuElement.classList.add('closed');
  }
};

export const toggleMenu = () => {
  const menuElement = document.querySelector('.rtf');
  if (menuElement && menuElement.classList.contains('open')) {
    menuElement.classList.remove('open');
    menuElement.classList.add('closed');
  } else {
    menuElement?.classList.remove('closed');
    menuElement?.classList.add('open');
  }
};
